import { useContext } from "react";
import { AuthContext } from "../../auth/contexts/AuthContext";

const Login = () => {
  const { user, registerUser, logout } = useContext(AuthContext);

  return (
    <div className="bg-neutral-900/20">
      <div className="mx-auto w-full max-w-lg space-y-2.5 py-3.5">
        <h1>Login Form</h1>
        <p>This is Login form for Firebase and Normal Felid</p>

        <div>
          {user ? (
            <div>
              <p>Welcome, {user.displayName}</p>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <button onClick={registerUser}>Login with Google</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
