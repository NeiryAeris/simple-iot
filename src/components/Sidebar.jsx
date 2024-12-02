import React from "react";
import { assets } from "@/app/assets/assets";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="container w-60 justify-center items-center bg-component-color-1 h-screen text-gray-300">
      <div className="container flex my-2 px-4 w-full justify-between text-center">
        <h3>Side Bar</h3>
        <Image src={assets.menu_icon} alt="" />
      </div>
      <div className="container text-center w-full p-3">
        <div className="w-full flex justify-center">
          <Image className="size-20 rounded-full" src={assets.main_icon} alt="" />
        </div>
        <h1 className="mt-2">Blue Box</h1>
      </div>
      <h1 className="text-center">Data & History Activities</h1>
      <div className="w-full">
        <div className="w-full flex flex-col pl-5">
          <a className="py-1" href="">Statistic Report</a>
          <a className="py-1" href="">Devices</a>
          <a className="py-1" href="">Contact Information</a>
        </div>
        <h1 className="text-center">Credit</h1>
        <div className="w-full flex flex-col pl-5">
          <a href="/Home">About Us</a>
          <a href="">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
