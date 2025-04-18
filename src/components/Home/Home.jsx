import React from "react";
import LeftAside from "./HomeLayOut/LeftAside/LeftAside";
import MainConatain from "./HomeLayOut/MainConatain/MainConatain";
import RightAside from "./HomeLayOut/RightAside/RightAside";

const Home = () => {
  return (
    <>
      <div className="container mx-auto my-8">
        <div className="grid gap-3.5 md:grid-cols-12">
          <aside className="col-span-3">
            <LeftAside></LeftAside>
          </aside>
          <main className="col-span-6">
            <MainConatain></MainConatain>
          </main>
          <aside className="col-span-3">
            <RightAside></RightAside>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Home;
