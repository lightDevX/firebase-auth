import { Outlet } from "react-router";
import Header from "../Header/Header";
import LatestNews from "../LatestNews/LatestNews";

const Root = () => {
  return (
    <>
      <Header />
      <section className="container mx-auto">
        <LatestNews></LatestNews>
      </section>
      <Outlet />
    </>
  );
};

export default Root;
