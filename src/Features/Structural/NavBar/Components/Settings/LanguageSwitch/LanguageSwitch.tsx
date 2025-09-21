import React from "react";
import styles from "./LanguageSwitch.module.scss";
import { FaFlagUsa, FaFlag } from "react-icons/fa";

interface LanguageSwitchProps {
  lang: "en" | "fr";
  onChange: (lang: "en" | "fr") => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ lang, onChange }) => {
  return (
    <div className={styles["lang-switch"]}>
      <button
        className={lang === "en" ? styles.active : ""}
        onClick={() => onChange("en")}
      >
        <FaFlagUsa className={styles.icon} />
        EN
      </button>
      <button
        className={lang === "fr" ? styles.active : ""}
        onClick={() => onChange("fr")}
      >
        <FaFlag className={styles.icon} />
        FR
      </button>
    </div>
  );
};

export default LanguageSwitch;
