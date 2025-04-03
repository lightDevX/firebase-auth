import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const LatestNews = () => {
  return (
    <div>
      <div className="my-5 flex items-center justify-self-start bg-gray-200/50 p-4">
        <h2 className="mr-2.5 bg-red-400 px-4 py-2 font-medium">Latest</h2>
        <Marquee className="space-x-3" pauseOnHover={true}>
          <Link to="/news">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis minima quibusdam quae aut, rem iure!
          </Link>
          <span className="px-2.5">|</span>
          <Link to="/news">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis minima quibusdam quae aut, rem iure!
          </Link>
          <span className="px-2.5">|</span>
          <Link to="/news">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis minima quibusdam quae aut, rem iure!
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
