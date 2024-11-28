import React from "react";
import { IoMdHome } from "react-icons/io";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay, MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

export const Sidebar = () => {
  const mainLinks = [
    { icon: <IoMdHome />, name: "Home" },
    { icon: <CiYoutube />, name: "Shorts" },
    { icon: <MdOutlineSubscriptions />, name: "Subscriptions" },
  ];

  const otherLinks = [
    { icon: <FaHistory />, name: "History" },
    { icon: <MdPlaylistPlay />, name: "Playlists" },
    { icon: <MdOutlineWatchLater />, name: "Watch Later" },
    { icon: <BiLike />, name: "Liked Videos" },
  ];

  return (
    <div className="w-1/7 bg-black text-gray-200 h-screen overflow-y-auto scrollbar-none hover:scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      <ul className="flex flex-col border-b border-gray-700 py-4 px-3">
        {mainLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <a href="#" className="flex items-center gap-4 w-full">
              <span className="text-2xl">{icon}</span>
              <span className="text-sm font-medium">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col py-4 px-3 border-b border-gray-700">
        {otherLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <a href="#" className="flex items-center gap-4 w-full">
              <span className="text-2xl">{icon}</span>
              <span className="text-sm font-medium">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
