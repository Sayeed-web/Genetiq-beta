import React from "react";
import { useTheme } from "./Hooks/useThemeContext.tsx";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ThemeSwitch.module.scss";

const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles["theme-switch"]} onClick={toggleTheme}>
      <FaSun className={`${styles.icon} ${theme === "light" ? styles.active : ""}`} />
      <div className={styles["switch-slider"]}>
        <div
          className={`${styles["switch-circle"]} ${
            theme === "dark" ? styles.dark : styles.light
          }`}
        />
      </div>
      <FaMoon className={`${styles.icon} ${theme === "dark" ? styles.active : ""}`} />
    </div>
  );
};

export default ThemeSwitch;
