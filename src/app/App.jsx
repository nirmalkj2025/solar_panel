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

export default function App() {
  const content = useRoutes(routes);

  return (
    <SettingsProvider>
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MatxTheme>
            <CssBaseline />
            {content}
          </MatxTheme>
        </LocalizationProvider>
      </AuthProvider>
    </SettingsProvider>
  );
}
