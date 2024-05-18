import React from "react";
import { AdsBanner, TaxCalutaor } from "../../components";

const Home = () => {
  return (
    <div className="bg-[#eff2f5] pb-10">
      <div className="max-w-screen-xl m-auto pt-5 ">
      <div className="flex gap-10 ">
        <div className="w-[70%] bg-white px-16 py-8 rounded-lg">
          <TaxCalutaor />
        </div>
        <div className="w-[30%] rounded-lg ">
          <AdsBanner />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
