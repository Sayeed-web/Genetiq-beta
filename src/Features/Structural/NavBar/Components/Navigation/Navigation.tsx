import React, { useState } from "react";
import styles from "./Navigation.module.scss";

import DashboardIcon from "@assets/Navbar/Icons/Dashboard.svg?react";
import ReportsIcon from "@assets/Navbar/Icons/Reports.svg?react";
import GoalsIcon from "@assets/Navbar/Icons/Goals.svg?react";
import TestIcon from "@assets/Navbar/Icons/Test.svg?react";
import { useTranslation } from "../Settings/LanguageSwitch/Hooks/useChangeLanguage.tsx";

interface NavigationProps {
  onClick?: (selected: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onClick }) => {
    const { t } = useTranslation();
  
  const [selected, setSelected] = useState<string>("Dashboard");

  const handleClick = (buttonText: string) => {
    setSelected(buttonText);
    if (onClick) {
      onClick(buttonText);
    }
  };

  const buttons = [
    { key: "Dashboard", icon: <DashboardIcon /> },
    { key: "Goals", icon: <GoalsIcon /> },
    { key: "Reports", icon: <ReportsIcon /> },
    { key: "Tests", icon: <TestIcon /> },
  ];

  return (
    <div className={styles["navigation-container"]}>
      {buttons.map((button) => (
        <button
          key={button.key}
          className={`${selected === button.key ? styles["selected"] : ""}`}
          onClick={() => handleClick(button.key)}
        >
          <span className={styles.icon}>{button.icon}</span>
          {t(button.key)}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
