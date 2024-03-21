import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import FeedCard from "@/components/feedcard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebar {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-4">
          <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-3 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-1xl font-bold pr-4">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-2 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] p-2 mt-5 rounded-full w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[0.01px] border-l-[0.01px] border-gray-600"><FeedCard/></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
