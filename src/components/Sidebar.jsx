import React from 'react'
import { IoMdHome } from "react-icons/io";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";






export const Sidebar = () => {

    const mainLinks = [
        {
            icon: <IoMdHome />,
            name: "Home"
        },
        {
            icon: <PiVideoBold />,
            name: "Shorts"
        },
        {
            icon: <MdOutlineSubscriptions />,
            name: "Subscription"
        }

    ]

    const otherLinks = [
        {
            icon: <FaHistory />,
            name: "History"
        },
        {
            icon: <MdPlaylistPlay />,
            name: "Playlist"
        },
        {
            icon: <CiYoutube />,
            name: "Videos"
        },
        {
            icon: <MdOutlineWatchLater />,
            name: "Watch Later"
        },
        {
            icon: <BiLike />,
            name: "Liked Videos"
        }
    ]

    return (
        <div className='w-1/4 bg-black pr-5 overflow-auto h-screen pb-8 scrollbar-none hover:scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-black'>
            <ul className='flex flex-col border-b border- border-b-gray-500 px-3 pt-4 pb-3'>
                {mainLinks.map(
                    ({ icon, name }) => {
                        return(
                            <li key={name} className={`flex flex-row p-4 hover:bg-neutral-600 rounded-lg ${name === "Home" ? "bg-zinc-800" : " "} h-12`}>
                            <a href="#" className='flex flex-row gap-4 items-center justify-center'>
                                <span className='text-2xl'> {icon}</span>
                                <span className='text-sm font-semibold tracking-wider'>{name}</span>
                            </a>

                        </li>
                        )
                    }
                )}
            </ul>

            <ul className='flex flex-col px-3 pt-4 pb-3'>
                {otherLinks.map(
                    ({ icon, name }) => {
                        return(
                            <li key={name} className={`flex flex-row p-4 hover:bg-neutral-600 rounded-lg ${name === "Home" ? "bg-zinc-800" : " "} h-12`}>
                            <a href="#" className='flex flex-row gap-4 items-center justify-center'>
                                <span className='text-2xl'> {icon}</span>
                                <span className='text-sm font-semibold tracking-wider'>{name}</span>
                            </a>

                        </li>
                        )
                    }
                )}
            </ul>
        </div>

    )
}
