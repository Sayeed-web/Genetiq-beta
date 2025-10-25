import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';


// toggle between en and farsi
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // toggle between english and farsi
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

// btns for switch language
// TODO: maybe add icons later instead of plain txt
  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.languageButton} ${
          i18n.language === 'en' ? styles.active : ''
        }`}
        onClick={() => handleLanguageChange('en')}
        type="button"
        aria-label="switch to English"
      >
        EN
      </button>
      <button
        className={`${styles.languageButton} ${
          i18n.language === 'fa' ? styles.active : ''
        }`}
        onClick={() => handleLanguageChange('fa')}
        type="button"
        aria-label="switch to Farsi"
      >
        FA
      </button>
    </div>
  );
};

export default LanguageSwitcher;