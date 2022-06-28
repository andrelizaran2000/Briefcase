// Modules
import i18next from "i18next";
import { useState } from 'react';
import { I18nextProvider } from "react-i18next";

// Translations
import common_en from '../../translations/common_en.json'
import common_es from '../../translations/common_es.json'
import projects_en from '../../translations/projects_en.json'
import projects_es from '../../translations/projects_es.json'
import personal_en from '../../translations/personal_en.json'
import personal_es from '../../translations/personal_es.json'

export default function TranslateContainer({ children }:any) {

  const [language, setLanguage] = useState('en');

  i18next.init({
    interpolation: { escapeValue: false },
    lng: language,
    resources: {
      en: {
        common: common_en,
        projects: projects_en,
        personal: personal_en
      },
      es: {
        common: common_es,
        projects: projects_es,
        personal: personal_es
      }
    }
  });

  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  )
}
