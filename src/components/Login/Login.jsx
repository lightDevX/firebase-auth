import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { NavLink } from "react-router";
import auth from "../../auth/firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
        //   const user = result.user;
        console.log(result);
        setUser(result.user);
      })
      .catch((e) => {
        console.log(e);
        setUser(null);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User Sign Out");
        setUser(null);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="bg-neutral-900/20">
      <div className="mx-auto w-full max-w-lg space-y-2.5 py-3.5">
        <h1>Login Form</h1>
        <p>This is Login form for Firebase and Normal Felid</p>
        <form onSubmit={handleGoogleSignIn}>
          <div className="my-4 flex flex-col gap-1.5 space-y-2">
            <label htmlFor="email" className="text-xl font-semibold">
              Email Address
            </label>
            <input
              className="rounded-xl bg-lime-200/35 px-3 py-2 text-xl outline outline-amber-100"
              type="email"
              name="email"
              id="email"
              placeholder="Provide your email address"
            />
          </div>
          <div className="my-4 flex flex-col gap-1.5 space-y-2">
            <label htmlFor="password" className="text-xl font-semibold">
              Password
            </label>
            <input
              className="rounded-xl bg-lime-200/35 px-3 py-2 text-xl outline outline-amber-100"
              type="password"
              name="password"
              id="password"
              placeholder="Provide your password"
            />
          </div>
          <div className="flex flex-col gap-3.5">
            <button
              onClick={handleSingOut}
              className="rounded-2xl bg-amber-200 px-3.5 py-2.5"
            >
              Login
            </button>
            <p>
              If you don't registered{" "}
              <NavLink
                to="/register"
                className="text-xl font-semibold text-teal-700"
              >
                Create Account
              </NavLink>
            </p>

            {user ? "Valid" : "Not Valid"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
