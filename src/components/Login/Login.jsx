import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
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
    <div>
      {user ? (
        <button onClick={handleSingOut}>Log Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Login With Google</button>
      )}
    </div>
  );
};

export default Login;
