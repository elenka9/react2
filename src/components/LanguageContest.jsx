import { useState, createContext } from "react";
import React from "react";
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // children это вложенные компоненты, которые будут иметь доступ к контексту
  const [language, setLanguage] = useState("ru");
  // хук для создания состояния language с начальным значением ru
  const switchLanguage = (lang) => {
    setLanguage(lang);
  };
  // функция принимает новый язык lang и обновляет состояние language с помощью setLanguage
  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
