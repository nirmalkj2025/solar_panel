import { useRoutes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
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
// Import the Redux store and Provider
import { Provider } from "react-redux";
import {store} from "../redux/store";
export default function App() {
  const content = useRoutes(routes);

  return (
    // Wrap your app with the Redux Provider to make the store available
    <Provider store={store}>
      <SettingsProvider>
        {/* <AuthProvider> */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MatxTheme>
              <CssBaseline />
              {content}
            </MatxTheme>
          </LocalizationProvider>
        {/* </AuthProvider> */}
      </SettingsProvider>
    </Provider>
  );
}
