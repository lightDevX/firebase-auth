import { Outlet } from "react-router";
import Header from "../Header/Header";
import LatestNews from "../LatestNews/LatestNews";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  return (
    <>
      <Header />
      <section className="container mx-auto">
        <LatestNews></LatestNews>
      </section>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
};

export default Root;
