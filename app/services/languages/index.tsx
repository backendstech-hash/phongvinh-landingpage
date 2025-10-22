import enHome from '@/app/(home)/languages/en.json';
import viHome from '@/app/(home)/languages/vi.json';

import enHeader from '@/app/components/shares/header/languages/en.json';
import viHeader from '@/app/components/shares/header/languages/vi.json';


import enFooter from '@/app/components/shares/footer/languages/en.json';
import viFooter from '@/app/components/shares/footer/languages/vi.json';


export const locales = ['en', 'vi'] as const
export const defaultLocale = 'en'

export const translations = {
    en: {
        home: enHome,
        header: enHeader,
        footer: enFooter
    },
    vi: {
        home: viHome,
        header: viHeader,
        footer: viFooter
    },
}
