# کدهای کامل Theme و Language Switcher

## 1. Context/ThemeContext.tsx
**مسیر:** `src/Context/ThemeContext.tsx`
```tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Theme context for managing light and dark mode with localStorage persistence
// Maintains user preference across browser sessions

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  
  // Initialize theme from localStorage with light mode fallback
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  // Apply theme to DOM and persist changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for accessing theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

---

## 2. Features/Structural/ThemeSwitcher/ThemeSwitcher.tsx
**مسیر:** `src/Features/Structural/ThemeSwitcher/ThemeSwitcher.tsx`
```tsx
import { useTheme } from '../../../Context/ThemeContext';
import styles from './ThemeSwitcher.module.scss';

// small btns to switch theme. Kept it basic so its not overkill
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  // btns for switch theme
  // TODO: maybe ins more color themes later
  return (
    <div className={styles.themeSwitcher}>
      <button
        className={`${styles.themeButton} ${
          theme === 'light' ? styles.active : ''
        }`}
        onClick={toggleTheme}
        type="button"
        aria-label="switch to Light mode"
      >
        ☀️
      </button>
      <button
        className={`${styles.themeButton} ${
          theme === 'dark' ? styles.active : ''
        }`}
        onClick={toggleTheme}
        type="button"
        aria-label="switch to Dark mode"
      >
        🌙
      </button>
    </div>
  );
};

export default ThemeSwitcher;
```

---

## 3. Features/Structural/ThemeSwitcher/ThemeSwitcher.module.scss
**مسیر:** `src/Features/Structural/ThemeSwitcher/ThemeSwitcher.module.scss`
```scss
/* basic styles for theme btns can tune later if need */
/* active = highlight to show current theme */

.themeSwitcher {
  display: flex;
  gap: 4px;

  // using theme vars so it works in dark mode
  background: var(--hover-bg);
  border-radius: 8px;
  padding: 4px;
  border: 1px solid var(--border-color);
}

.themeButton {
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background: transparent;

  // Use CSS custom properties for theme consistency
  color: var(--text-color);
  opacity: 0.7;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 32px;

  &:hover {
    background: var(--hover-bg);
    opacity: 1;
  }

  &.active {
    background: #646cff;
    color: #ffffff;
    font-weight: 600;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.5);
  }
}
```

---

## 4. Features/Structural/ThemeSwitcher/index.ts
**مسیر:** `src/Features/Structural/ThemeSwitcher/index.ts`
```ts
export { default } from './ThemeSwitcher';
```

---

## 5. Features/Structural/LanguageSwitcher/LanguageSwitcher.tsx
**مسیر:** `src/Features/Structural/LanguageSwitcher/LanguageSwitcher.tsx`
```tsx
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

// toggle between en and farsi(persian lang)
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // toggle between english and farsi(persian lang)
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
```

---

## 6. Features/Structural/LanguageSwitcher/LanguageSwitcher.module.scss
**مسیر:** `src/Features/Structural/LanguageSwitcher/LanguageSwitcher.module.scss`
```scss
/* styles for language switcher buttons in navbar */
/* active stat = highlighted with blue background */

.languageSwitcher {
  display: flex;
  gap: 4px;
  // using theme vars so it works in dark mode
  background: var(--hover-bg);
  border-radius: 8px;
  padding: 4px;
  border: 1px solid var(--border-color);
}

.languageButton {
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background: transparent;
  // theme var for text color
  color: var(--text-color);
  opacity: 0.7;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 32px;

  &:hover {
    background: var(--hover-bg);
    opacity: 1;
  }

  &.active {
    background: #646cff;
    color: #ffffff;
    font-weight: 600;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.5);
  }
}
```

---

## 7. i18n/index.ts
**مسیر:** `src/i18n/index.ts`
```ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// i18n config for english and farsi(persian) support + rtl
// saves language preference in localStorage and applies rtl for Farsi(persian)
// TODO: insert more translations later if need

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

// quick fix: fallback to english if nothing in local storage
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
```

---

## 8. App/Styles/theme.scss
**مسیر:** `src/App/Styles/theme.scss`
```scss
// css variables for light and dark themes
// applied via data theme attribute on html element
/* theme vars. Just light and dark for now simple setup */

:root[data-theme='light'] {
  --bg-color: #ffffff;
  --text-color: rgba(0, 0, 0, 0.87);
  --text-secondary: rgba(0, 0, 0, 0.6);
  --secondary-bg: #f9f9f9;
  --border-color: rgba(0, 0, 0, 0.1);
  --hover-bg: rgba(0, 0, 0, 0.05);
  --input-bg: #ffffff;
  --card-bg: #ffffff;
  --shadow: rgba(0, 0, 0, 0.1);
  // no logo-color in light mode, let SVG use original brand colors
}

:root[data-theme='dark'] {
  --bg-color: #1a1a1a;
  // brighter text for better readability in dark mode
  --text-color: rgba(255, 255, 255, 0.92);
  --text-secondary: rgba(255, 255, 255, 0.65);
  --secondary-bg: #2a2a2a;
  --border-color: rgba(255, 255, 255, 0.15);
  --hover-bg: rgba(255, 255, 255, 0.08);
  --input-bg: #2a2a2a;
  --card-bg: #242424;
  --shadow: rgba(0, 0, 0, 0.5);
  // white logo for dark mode readability
  // TODO: maybe tweak logo color later
  --logo-color: #ffffff;
}

// apply theme colors to body and common elements
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

input {
  background-color: var(--input-bg);
  color: var(--text-color);
  border-color: var(--border-color);
}

// cards and containers
.card,
.container {
  background-color: var(--card-bg);
  color: var(--text-color);
}
```

---

## 9. Features/Structural/NavBar/Navbar.module.scss (بخش اضافه شده)
**مسیر:** `src/Features/Structural/NavBar/Navbar.module.scss`
```scss
.navbar-container {
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	width: 100%;
	box-sizing: border-box;
	align-items: center;

	.logo-wrapper {
		svg {
			width: 150px;
			height: 38px;
		}
	}

    /* Override logo color for dark theme visibility */
	:global([data-theme='dark']) & .logo-wrapper {
		color: var(--logo-color);

		svg path {
			fill: currentColor;
		}
	}
	.actions-container {
		display: flex;
		gap: 8px;
	}
}
```

---

## مسیرهای فایلها:

### Context Files:
- `src/Context/ThemeContext.tsx`

### Theme Switcher Files:
- `src/Features/Structural/ThemeSwitcher/ThemeSwitcher.tsx`
- `src/Features/Structural/ThemeSwitcher/ThemeSwitcher.module.scss`
- `src/Features/Structural/ThemeSwitcher/index.ts`

### Language Switcher Files:
- `src/Features/Structural/LanguageSwitcher/LanguageSwitcher.tsx`
- `src/Features/Structural/LanguageSwitcher/LanguageSwitcher.module.scss`

### i18n Files:
- `src/i18n/index.ts`

### Style Files:
- `src/App/Styles/theme.scss`
- `src/Features/Structural/NavBar/Navbar.module.scss` (بخش تم)

### نصب Dependencies:
```bash
npm install i18next react-i18next
```