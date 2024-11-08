import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdVideoCall } from "react-icons/md";


export const Navbar = () => {
    return (
        <div className="flex items-center px-6 h-16 bg-black opacity-95 sticky top-0">
        <div className="flex items-center text-white gap-4 text-2xl w-full mx-auto">
            {/* Left section: Menu and YouTube logo */}
            <div>
                <IoMenuSharp />
            </div>
            <div className="flex items-center py-3">
                <AiFillYoutube className="text-3xl text-red-600" />
                <span className="text-white text-xl ml-2">YouTube</span>
            </div>
    
            {/* Center section: Search bar */}
            <div className="flex-1 flex justify-center gap-3">
                <form action="" className="w-full max-w-md">
                    <div className="flex items-center w-full">
                        <div className="relative flex items-center w-full rounded-l-full focus-within:shadow-lg bg-zinc-600 overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search"
                                className="rounded-l-full px-4 py-2 w-full outline-none bg-black text-white text-sm border border-zinc-800 placeholder-stone-500"
                            />
                        </div>
                        <button className="p-2 rounded-r-full bg-neutral-800 flex items-center justify-center border border-zinc-800">
                            <CiSearch className="text-white text-xl" />
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center p-2 text-xl rounded-full bg-zinc-900">
                    <button><FaMicrophone /></button>
                </div>
            </div>
    
            {/* Right section: Icons */}
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center p-2 text-xl rounded-full bg-black">
                    <button><MdVideoCall /></button>
                </div>
                <div className="flex items-center justify-center p-2 text-xl rounded-full bg-black">
                    <button><IoIosNotifications /></button>
                </div>
                <div className="flex items-center justify-center p-2 text-xl rounded-full bg-black">
                    <button><CgProfile /></button>
                </div>
            </div>
        </div>
    </div>
    

    )
}
