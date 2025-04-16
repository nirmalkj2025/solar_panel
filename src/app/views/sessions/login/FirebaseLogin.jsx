

import { useDispatch, useSelector } from "react-redux";
// import { setUser, setAuthenticated } from "redux/actions/authActions"; 
import { login } from "../../../../redux/actions/authActions";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Formik } from "formik";
import * as Yup from "yup";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { styled, useTheme } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";

import MatxLogo from "app/components/MatxLogo";
import MatxDivider from "app/components/MatxDivider";
import { Paragraph, Span } from "app/components/Typography";

import useAuth from "app/hooks/useAuth";

// STYLED COMPONENTS
const GoogleButton = styled(Button)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  boxShadow: theme.shadows[0],
  backgroundColor: "#e0e0e0",
  "&:hover": { backgroundColor: "#d5d5d5" }
}));

const Logo = styled("div")({
  gap: 10,
  display: "flex",
  alignItems: "center",
  "& span": { fontSize: 26, lineHeight: 1.3, fontWeight: 800 }
});

const FirebaseRoot = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#0b0f26",
  minHeight: "100vh !important",
  "& .card": { maxWidth: 800, margin: "1rem" },
  "& .cardLeft": {
    color: "#fff",
    height: "100%",
    display: "flex",
    padding: "32px 56px",
    flexDirection: "column",
    backgroundSize: "cover",
    background: "#101632 url(/assets/images/solar-bg.jpg) no-repeat center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: { minWidth: 200 },
    "& img": { width: 32, height: 32 }
  },
  "& .mainTitle": {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.4,
    marginBottom: 24
  },
  "& .feature": {
    fontSize: 14,
    marginBottom: 10,
    opacity: 0.85
  }
}));

// initial login credentials
const initialValues = {
  email: "Admin@kayjayglobal.com",
  password: "Admin@123",
  remember: true
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  email: Yup.string().email("Invalid email").required("Email is required")
});

export default function FirebaseLogin() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const { signInWithEmail, signInWithGoogle } = useAuth();
  const auth = useSelector((state) => state.auth);
  // const handleFormSubmit = async (values) => {
  //   try {
  //     await signInWithEmail(values.email, values.password);
  //     console.log("Login successful", values.email, values.password);
  //     navigate(state ? state.from : "/");
  //     enqueueSnackbar("Logged in successfully", { variant: "success" });
  //   } catch (error) {
  //     enqueueSnackbar(error.message, { variant: "error" });
  //   }
  // };
  const handleFormSubmit = async (values) => {
    try {
      const result = await dispatch(login(values.email, values.password));
  
      if (result.success) {
        navigate(state ? state.from : "/");
        enqueueSnackbar("Logged in successfully", { variant: "success" });
      } else {
        enqueueSnackbar(result.error || "Login failed", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };


  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (e) {
      enqueueSnackbar("Google sign-in failed", { variant: "error" });
    }
  };

  return (
    <FirebaseRoot>
      <Card className="card">
        <Grid container>
          <Grid size={{ md: 6, xs: 12 }}>
            <div className="cardLeft">
              <Logo>
                <MatxLogo /> <span>SolarPulse</span>
              </Logo>

              <h1 className="mainTitle">Smart Solar Plant Dashboard</h1>

              <div className="feature">⚡ Real-time Device & Fault Monitoring</div>
              <div className="feature">📊 Intelligent Analytics & Energy Insights</div>
              <div className="feature">🔐 Secure Access with Role Management</div>

              <Span flexGrow={1} />

              <a
                href="https://your-solar-app.com"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/assets/images/logos/solar-icon.png" alt="Solar Logo" />
              </a>
            </div>
          </Grid>

          <Grid size={{ md: 6, xs: 12 }}>
            <Box px={4} pt={4}>
              <GoogleButton
                fullWidth
                variant="contained"
                onClick={handleGoogleLogin}
                startIcon={<img src="/assets/images/logos/google.svg" alt="google" />}>
                Sign in with Google
              </GoogleButton>
            </Box>

            <MatxDivider sx={{ mt: 3, px: 4 }} text="Or sign in with Email" />

            <Box p={4}>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}>
                {({
                  values,
                  errors,
                  touched,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit
                }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 2 }}
                    />

                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Box display="flex" alignItems="center" gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          onChange={handleChange}
                          checked={values.remember}
                          sx={{ padding: 0 }}
                        />
                        <Paragraph>Remember me</Paragraph>
                      </Box>

                      <NavLink
                        to="/session/forgot-password"
                        style={{ color: theme.palette.primary.main }}>
                        Forgot password?
                      </NavLink>
                    </Box>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={isSubmitting}
                      variant="contained"
                      fullWidth
                      sx={{ mt: 3, mb: 1 }}>
                      Sign In
                    </LoadingButton>

                    <Paragraph>
                      Don’t have an account?
                      <NavLink
                        to="/session/signup"
                        style={{ marginInlineStart: 5, color: theme.palette.primary.main }}>
                        Register
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </FirebaseRoot>
  );
}
