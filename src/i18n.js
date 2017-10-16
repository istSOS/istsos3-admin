import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import headerI18n from './pages/header/headerI18n';
import offeringsI18n from './offerings/offeringsI18n';

let resources = {
    en: {
        ...headerI18n.en,
        ...offeringsI18n.en,
        translations: {
            "title": "istSOS-3.0",
            "start": "This page is in English.",
            "welcome": "Welcome to istSOS3",
            "user": "Username",
            "password": "Password",
            "go_home": "Go to home",
            "test": "Test",
            "tab1": "Single viewer",
            "tab2": "Compare viewer",
            "current": "Last available data",
            "selectProcedure": "Select a procedure",
            "navigation": "Menu",
            "filter": "Filter",
            "insertSpecimen": "Insert specimen"
        }
    },
    it: {
        ...headerI18n.it,
        ...offeringsI18n.it,
        translations: {
            "title": "istSOS-3.0",
            "start": "Questa pagina è in Italiano",
            "welcome": "Benvenuto in istSOS3",
            "user": "Nome utente",
            "password": "Password",
            "go_home": "Vai alla home",
            "test": "Prova",
            "tab1": "Viewer singolo",
            "tab2": "Compara",
            "current": "Ultimo dato disponibile",
            "selectProcedure": "Seleziona una procedura",
            "navigation": "Menu",
            "filter": "Filtra",
            "insertSpecimen": "Inserisci specimen"
        }
    }
};

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: resources,
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['common', 'header', 'offerings'],
    defaultNS: 'common',

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ','
    },

    react: {
        wait: true
    }
});

export default i18n;
