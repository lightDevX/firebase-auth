import moment from "moment";
import logo from "../../assets/media/images/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex flex-col items-center justify-between gap-3 py-5">
          <div className="h-16 w-xs">
            <img
              src={logo}
              alt="Web Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-xl text-neutral-900/50">
            Journalism Without Fear or Favour
          </p>
          <p className="text-2xl text-neutral-900/70">
            {moment().format("dddd, MMMM Do YYYY").toString()}
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
