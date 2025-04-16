// import { useContext } from "react";
// import AuthContext from "app/contexts/FirebaseAuthContext";

// export default function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }

//   return context;
// }


import { useSelector, useDispatch } from "react-redux";
// import { logout as logoutAction } from "redux/actions/authActions";
import {logout as logoutAction} from "../../redux/actions/authActions";

const useAuth = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  return {
    isAuthenticated,
    user,
    logout
  };
};

export default useAuth;
