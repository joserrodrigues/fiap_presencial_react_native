import { Platform, NativeModules } from 'react-native'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './en-US'
import pt from './pt-BR'

const normalizeTranslate = {
    'en_US': 'en_US',
    'pt_BR': 'pt_BR',
    'en': 'en_US',
    'pt_US': 'pt_BR',
    'pt-BR': 'pt_BR',
    'en-US': 'en_US',
}

// Aqui setamos os idiomas que o I18N irá dar suporte
i18n.translations = {
    'en_US': en,
    'pt_BR': pt,
}

console.log("Localization.decimalSeparator " + Localization.decimalSeparator);
console.log("Localization.digitGroupingSeparator " + Localization.digitGroupingSeparator);
console.log("IsMetric " + Localization.isMetric);
console.log("TimeZone " + Localization.timezone);

const setLanguageToI18n = () => {
    const language = Localization.locale
    const translateNormalize = normalizeTranslate[language]
    const iHaveThisLanguage = i18n.translations.hasOwnProperty(translateNormalize)
    iHaveThisLanguage
        ? i18n.locale = translateNormalize
        : i18n.defaultLocale = 'en_US'
}

setLanguageToI18n()

export const translate = key => i18n.t(key)