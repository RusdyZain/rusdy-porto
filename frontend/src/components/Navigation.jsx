import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  useLanguage,
  useLocalizedContent,
} from "../context/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { navigation } = useLocalizedContent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const renderLanguageToggle = (isMobile = false) => {
    const group = (
      <div
        role="group"
        aria-label={navigation.languageSwitcherAria}
        className={`flex items-center rounded-full border border-white/15 bg-white/5 text-xs font-semibold uppercase tracking-[0.3em] ${
          isMobile ? "w-full justify-center py-2" : "px-2 py-1"
        }`}
      >
        {navigation.languageOptions.map((option, idx) => (
          <React.Fragment key={option.code}>
            <button
              type="button"
              onClick={() => setLanguage(option.code)}
              className={`px-2 transition-colors ${
                language === option.code
                  ? "text-white"
                  : "text-white/40 hover:text-white/80"
              }`}
              aria-pressed={language === option.code}
            >
              {option.shortLabel || option.code.toUpperCase()}
            </button>
            {idx < navigation.languageOptions.length - 1 && (
              <span className="text-white/30 text-xs px-1">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    );

    if (isMobile) {
      return (
        <div className="pt-4 border-t border-white/10">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
            {navigation.languageLabel}
          </p>
          {group}
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <span className="text-white/60 text-[11px] uppercase tracking-[0.3em]">
          {navigation.languageLabel}
        </span>
        {group}
      </div>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
            >
              <img
                src="/cantures-logo.png"
                alt="Cantures Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white/70 hover:text-white transition-colors text-sm font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              {renderLanguageToggle()}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-20 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-4">
                {navigation.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/70 hover:text-white transition-colors text-lg font-medium py-2"
                  >
                    {link.name}
                  </a>
                ))}
                {renderLanguageToggle(true)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
