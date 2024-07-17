import i18n, { reloadResources } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uz from '../public/locales/uz.json';
import ru from  '../public/locales/ru.json';
import en from  '../public/locales/en.json';

const  language = localStorage.getItem('i18nextLng') ||  "uz"
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'uz',
    lng:language,   
    debug: true,
    resources:{
        uz: {
            translation: uz
        },
        ru: {
            translation: ru
        },
        en: {
            translation: en
        }

    }
    
})
export default i18n;
