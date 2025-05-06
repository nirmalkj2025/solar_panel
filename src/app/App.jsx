import { useRoutes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// ROOT THEME PROVIDER
import { MatxTheme } from "./components";
// ALL CONTEXTS
import SettingsProvider from "./contexts/SettingsContext";
import { AuthProvider } from "./contexts/FirebaseAuthContext";
// ROUTES
import routes from "./routes";
// DATE PICKER SUPPORT
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// FAKE SERVER
import "../__api__";
// Redux store and Provider
import { Provider } from "react-redux";
import { store } from "../redux/store";
import theme from "../theme";

export default function App() {
  const content = useRoutes(routes);

  return (
    <Provider store={store}>
      <SettingsProvider>
        {/* <AuthProvider> */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MatxTheme>
              {content}
            </MatxTheme>
          </ThemeProvider>
        </LocalizationProvider>
        {/* </AuthProvider> */}
      </SettingsProvider>
    </Provider>
  );
}
