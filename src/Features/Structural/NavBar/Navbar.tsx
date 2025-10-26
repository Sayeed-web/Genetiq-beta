import Navigation from "./Components/Navigation/Navigation";
import Logo from "@assets/General/LogoGenetiq.svg?react";
import styles from "./Navbar.module.scss";
import NotificationHub from "./Components/NotificationsHub/NotificationsHub";
import Profile from "./Components/Profile/Profile";
import ManageData from "./Components/ManageData/ManageData";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";


/* added lang switcher and theme switcher to nav actions */
const Navbar = () => {
	return (
		<div className={styles["navbar-container"]}>
			<div className={styles["logo-wrapper"]}>
				<Logo />
			</div>
			<Navigation />
			<div className={styles["actions-container"]}>
				<ThemeSwitcher />
				<LanguageSwitcher />
				<ManageData />
				<NotificationHub IsBadge={true} />
				<Profile />
			</div>
		</div>
	);
};

export default Navbar;
