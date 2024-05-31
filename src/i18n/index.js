import { createI18n } from 'vue-i18n'

import ru from './locales/ru.json';
import zh from './locales/zh.json';

const messages = {
    ru: ru,
    zh: zh
};

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    messages,
})

export default i18n;
