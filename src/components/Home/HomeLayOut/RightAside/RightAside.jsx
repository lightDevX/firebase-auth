import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RightAside = () => {
  return (
    <div>
      <div>
        <h1>Login With</h1>
        <div className="mt-8 flex flex-col items-start justify-center gap-5 *:w-full">
          <button className="btn flex px-4 py-2.5">
            <FcGoogle className="h-6 w-6" /> Google
          </button>
          <button className="btn flex px-4 py-2.5">
            <FaGithub className="h-6 w-6" /> Github
          </button>
        </div>
      </div>
      <div className="join join-vertical mt-6 flex *:w-full">
        <button className="btn join-item px-4">
          <FaFacebook className="h-6 w-6 text-blue-700"></FaFacebook> Facebook
        </button>
        <button className="btn join-item px-4">Button</button>
        <button className="btn join-item px-4">Button</button>
      </div>
    </div>
  );
};

export default RightAside;
