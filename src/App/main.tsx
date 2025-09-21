import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/Global.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastContainer } from "react-toastify";
import { LanguageProvider } from "../Features/Structural/NavBar/Components/Settings/LanguageSwitch/Hooks/useChangeLanguage.tsx";
import { ThemeProvider } from "../Features/Structural/NavBar/Components/Settings/ThemeSwitch/Hooks/useThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<StrictMode>
			 <ThemeProvider>
			    <LanguageProvider>
					

			<App />
		
			    </LanguageProvider>
					</ThemeProvider>

			<ToastContainer />
		</StrictMode>
	</Provider>,
);
