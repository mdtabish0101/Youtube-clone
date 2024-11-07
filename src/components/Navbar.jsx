import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";


export const Navbar = () => {
    return (
        <div className='flex px-14 h-15 justify-between items-center bg-black opacity-95 sticky'>
            <div className='flex text-white gap-4 items-center text-2xl'>
                <div className=''>
                    <IoMenuSharp />
                </div>
                <div className='flex items-center py-3'>
                    <AiFillYoutube className='text-3xl text-red-700' />
                    <span className='text-white text-xl font-semibold'>Youtube</span>
                </div>
                <div className='flex items-center justify-center'>
                    <form action="">
                        <div>
                            <div className='flex items-center justify-center px-20'>
                                <input type="text" placeholder='search' className='rounded-l-full px-3' />
                                <button className='bg-white p-1 rounded-r-full'>
                                    <CiSearch className='text-black' />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
