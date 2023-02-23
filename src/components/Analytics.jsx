import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            nunc diam. Etiam vitae imperdiet enim. Vestibulum sed sapien
            pharetra, facilisis risus faucibus, suscipit ligula. Mauris sed
            iaculis eros, vel posuere nisi.
          </p>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
