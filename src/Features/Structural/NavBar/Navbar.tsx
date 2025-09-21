import React, { useState } from "react";
import NavigationProps from "./Components/Navigation/Navigation";
import Logo from "@assets/General/LogoGenetiq.svg?react";
import styles from "./Navbar.module.scss";
import NotificationHub from "./Components/NotificationsHub/NotificationsHub";
import Profile from "./Components/Profile/Profile";
import ManageData from "./Components/ManageData/ManageData";
import { useTranslation } from "./Components/Settings/LanguageSwitch/Hooks/useChangeLanguage.tsx";
import LanguageSwitch from "./Components/Settings/LanguageSwitch/LanguageSwitch.tsx";
import ThemeSwitch from "./Components//Settings/ThemeSwitch/ThemeSwitchButton.tsx";
import { FiSettings } from "react-icons/fi"; 
const Navbar = () => {
  const { lang, changeLanguage, t } = useTranslation();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["logo-wrapper"]}>
        <Logo />
      </div>

      <NavigationProps t={t} />

      <div className={styles["actions-container"]}>
        <ManageData t={t} />
        <NotificationHub IsBadge={true} />
        <Profile />

        <div className={styles["settings-wrapper"]}>
          <FiSettings
            className={styles["settings-icon"]}
            onClick={() => setShowSettings(prev => !prev)}
          />

        {showSettings && (
          <div className={styles["settings-dropdown"]}>
            <div className={styles["dropdown-item"]}>
              <ThemeSwitch />
            </div>
            <div className={styles["dropdown-item"]}>
              <LanguageSwitch lang={lang} onChange={changeLanguage} />
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
