import { useContext } from "react";
import { FaRegEye } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../auth/contexts/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;
    createUser(email, password)
      .then((results) => {
        console.log(results.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-neutral-900/20">
      <div className="mx-auto w-full max-w-lg space-y-2.5 py-3.5">
        <h1>Login Form</h1>
        <p>This is Login form for Firebase and Normal Felid</p>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col gap-1.5 space-y-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              className="rounded-xl bg-lime-200/35 px-3 py-2 text-xl outline outline-amber-100"
              type="text"
              name="name"
              id="name"
              placeholder="Provide your name"
            />
          </div>
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
          <div className="relative my-4 flex flex-col gap-1.5 space-y-2">
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
            <span className="absolute top-14 right-6">
              <FaRegEye />
            </span>
          </div>
          <div className="flex items-center gap-3.5">
            <button className="rounded-2xl bg-amber-200 px-3.5 py-2.5">
              Create Account
            </button>
            <p>
              If you don't registered
              <NavLink
                to="/login"
                className="pl-1.5 text-xl font-semibold text-teal-700"
              >
                Login
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
