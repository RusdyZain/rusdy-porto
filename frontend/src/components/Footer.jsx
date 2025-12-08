import React from "react";
import { Heart } from "lucide-react";
import { useLocalizedContent } from "../context/LanguageContext";
import packageInfo from "../../package.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo, footer } = useLocalizedContent();
  const appVersion = packageInfo.version;

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Top Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Version */}
          <div className="text-center md:text-left">
            <p className="text-white/50 text-xs uppercase tracking-wider">{footer.versionLabel}</p>
            <p className="text-white text-sm font-semibold">v{appVersion}</p>
          </div>

          {/* Center - Made with Love */}
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>{footer.builtWith}</span>
            <Heart className="w-4 h-4 text-blue-400 fill-blue-400" />
            <span>{footer.using}</span>
          </div>

          {/* Right - Quick Links & Rights */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-6">
              {footer.quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-blue-300 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-white/40 text-xs text-center md:text-right">
              &copy; {currentYear} {personalInfo.name}. {footer.rights}
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
