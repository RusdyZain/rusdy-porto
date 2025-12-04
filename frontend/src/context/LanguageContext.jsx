import React from "react";
import { DEFAULT_LANGUAGE, localizedContent } from "../data/mockData";

const LanguageContext = React.createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
});

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const stored = window.localStorage.getItem("preferred-language");
  if (stored && localizedContent[stored]) {
    return stored;
  }

  const browserLanguage = window.navigator?.language?.toLowerCase() ?? "";
  if (browserLanguage.startsWith("id") && localizedContent.id) {
    return "id";
  }

  return DEFAULT_LANGUAGE;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = React.useState(getInitialLanguage);

  const setLanguage = React.useCallback((nextLanguage) => {
    const resolved = localizedContent[nextLanguage]
      ? nextLanguage
      : DEFAULT_LANGUAGE;
    setLanguageState(resolved);
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("preferred-language", language);
    }
  }, [language]);

  const value = React.useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);

export const useLocalizedContent = () => {
  const { language } = useLanguage();
  return localizedContent[language] || localizedContent[DEFAULT_LANGUAGE];
};
