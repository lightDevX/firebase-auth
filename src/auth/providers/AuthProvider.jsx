import { AuthContext } from "../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "Maohib Bin Hasan",
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
