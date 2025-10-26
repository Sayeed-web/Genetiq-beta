import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/Global.scss";
import "./Styles/theme.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastContainer } from "react-toastify";
import "../i18n";
import { ThemeProvider } from "../Context/ThemeContext";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<ThemeProvider>
			<StrictMode>
				<App />
				<ToastContainer />
			</StrictMode>
		</ThemeProvider>
	</Provider>,
);
