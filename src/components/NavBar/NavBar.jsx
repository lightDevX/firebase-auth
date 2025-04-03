import { NavLink } from "react-router";
import userIcon from "../../assets/media/images/user.png";

const NavBar = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between">
        <div></div>
        <div className="flex items-center justify-end gap-4">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex items-center gap-2.5">
          <img
            src={userIcon}
            alt="User Icon"
            className="h-full w-full object-center"
          />
          <button className="bg-neutral-900/80 px-7 py-2 text-white">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
