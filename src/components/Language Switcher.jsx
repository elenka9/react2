import { useContext } from "react";
import { LanguageContext } from "./LanguageContest";

const LanguageSwitcher=() =>{
    const{language, switchLanguage} = useContext(LanguageContext);
//   деструктуризируем и извлекаем language и switchLanguage из объекта контекста LanguageContext
  return (
    <div>
      <button onClick={() => switchLanguage('en')}>
        English
      </button> <span> </span>
      <button onClick={() => switchLanguage('ru')}>
        Русский
      </button>
      <p>Current language: {language}</p>
    </div>
  );
};

export default LanguageSwitcher
