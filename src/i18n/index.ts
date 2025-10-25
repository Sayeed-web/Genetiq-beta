import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


// i18n config for EN/FA support
// saves language preference in localStorage and applies RTL for Farsi

const resources = {
  en: {
    translation: {
      dashboard: {
        title: 'Health Dashboard',
        welcome: 'Welcome to your personalized health insights',
        tracker: 'Health Tracker',
        age: 'Age Analysis',
        concerns: 'Health Concerns',
        systemDetail: 'System Details',
        riskAssessment: 'Risk Assessment'
      },
      common: {
        loading: 'Loading...',
        error: 'Something went wrong',
        save: 'Save',
        cancel: 'Cancel',
        close: 'Close'
      }
    }
  },
  fa: {
    translation: {
      dashboard: {
        title: 'داشبرد سلامت',
        welcome: 'به بینشهای شخصیسازی شده سلامت خود خوش آمدید',
        tracker: 'ردیاب سلامت',
        age: 'تحلیل سن',
        concerns: 'نگرانی های سلامت',
        systemDetail: 'جزئیات سیستم',
        riskAssessment: 'ارزیابی ریسک'
      },
      common: {
        loading: 'در حال بارگذاری...',
        error: 'مشکل پیش آمده است',
        save: 'ذخیره',
        cancel: 'لغو',
        close: 'بستن'
      }
    }
  }
};

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

// save language preference when it change
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
  document.documentElement.dir = lng === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

// set initial direction and language
document.documentElement.dir = savedLanguage === 'fa' ? 'rtl' : 'ltr';
document.documentElement.lang = savedLanguage;

export default i18n;