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
