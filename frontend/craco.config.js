// craco.config.js
const path = require("path");
require("dotenv").config();

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === "true",
  enableVisualEdits: process.env.REACT_APP_ENABLE_VISUAL_EDITS === "true",
  enableHealthCheck: process.env.ENABLE_HEALTH_CHECK === "true",
};

// Conditionally load visual editing modules only if enabled
let babelMetadataPlugin;
let setupDevServer;

if (config.enableVisualEdits) {
  babelMetadataPlugin = require("./plugins/visual-edits/babel-metadata-plugin");
  setupDevServer = require("./plugins/visual-edits/dev-server-setup");
}

// Conditionally load health check modules only if enabled
let WebpackHealthPlugin;
let setupHealthEndpoints;
let healthPluginInstance;

if (config.enableHealthCheck) {
  WebpackHealthPlugin = require("./plugins/health-check/webpack-health-plugin");
  setupHealthEndpoints = require("./plugins/health-check/health-endpoints");
  healthPluginInstance = new WebpackHealthPlugin();
}

const webpackConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {

      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        // Remove hot reload related plugins
        webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
          return !(plugin.constructor.name === 'HotModuleReplacementPlugin');
        });

        // Disable watch mode
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/, // Ignore all files
        };
      } else {
        // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
          ],
        };
      }

      // Add health check plugin to webpack if enabled
      if (config.enableHealthCheck && healthPluginInstance) {
        webpackConfig.plugins.push(healthPluginInstance);
      }

      return webpackConfig;
    },
  },
};

// Only add babel plugin if visual editing is enabled
if (config.enableVisualEdits) {
  webpackConfig.babel = {
    plugins: [babelMetadataPlugin],
  };
}

// Helper to convert deprecated onBefore/onAfter hooks from CRA config
function shimDeprecatedDevServerHooks(devServerConfig) {
  const { onBeforeSetupMiddleware, onAfterSetupMiddleware } = devServerConfig;

  if (!onBeforeSetupMiddleware && !onAfterSetupMiddleware) {
    return devServerConfig;
  }

  const originalSetupMiddlewares = devServerConfig.setupMiddlewares;

  devServerConfig.setupMiddlewares = (middlewares, devServer) => {
    if (typeof onBeforeSetupMiddleware === "function") {
      onBeforeSetupMiddleware(devServer);
    }

    if (typeof originalSetupMiddlewares === "function") {
      middlewares = originalSetupMiddlewares(middlewares, devServer) || middlewares;
    }

    if (typeof onAfterSetupMiddleware === "function") {
      onAfterSetupMiddleware(devServer);
    }

    return middlewares;
  };

  delete devServerConfig.onBeforeSetupMiddleware;
  delete devServerConfig.onAfterSetupMiddleware;

  return devServerConfig;
}

// Always setup dev server (even when optional modules disabled) so we can shim deprecated hooks
webpackConfig.devServer = (devServerConfig = {}) => {
  // Apply visual edits dev server setup if enabled
  if (config.enableVisualEdits && setupDevServer) {
    devServerConfig = setupDevServer(devServerConfig);
  }

  // Add health check endpoints if enabled
  if (config.enableHealthCheck && setupHealthEndpoints && healthPluginInstance) {
    const originalSetupMiddlewares = devServerConfig.setupMiddlewares;

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      // Call original setup if exists
      if (typeof originalSetupMiddlewares === "function") {
        middlewares = originalSetupMiddlewares(middlewares, devServer);
      }

      // Setup health endpoints
      setupHealthEndpoints(devServer, healthPluginInstance);

      return middlewares;
    };
  }

  return shimDeprecatedDevServerHooks(devServerConfig);
};

module.exports = webpackConfig;
