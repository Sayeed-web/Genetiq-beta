import { useTranslation } from "../Settings/LanguageSwitch/Hooks/useChangeLanguage.tsx";
import styles from "./ManageData.module.scss";
import PlusIcon from "@assets/Dahsboard/Plus.svg?react";

const ManageData = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["ManageData"]}>
      <button className={styles["icon-button"]}>
        <PlusIcon />
      </button>
      <p className={styles["p"]}>{t("manageData")}</p>
    </div>
  );
};

export default ManageData;
