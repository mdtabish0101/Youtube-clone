import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdVideoCall } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/userApp';
import { changeSearchTerm, clearVideos } from '../features/counter/youtubeSlice';
import { getSearchPageVideos } from '../store/Reducers/getSearchPageVideos';


export const Navbar = ({togleSidebar}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchTerm = useAppSelector((state)=>state.youtubeApp.searchTerm);

    const handleSearch = ()=>{
        if(location.pathname !== '/search') navigate("/search")
        
        else{
            dispatch(clearVideos)
            dispatch(getSearchPageVideos(false))
        }
    }

    return (
        <div className="flex items-center px-6 h-16 bg-black opacity-95 sticky top-0">
        <div className="flex items-center text-white gap-4 text-2xl w-full mx-auto">
            <div>
                <IoMenuSharp onClick={togleSidebar} className='cursor-pointer'/>
            </div>
            <div className="flex items-center py-3">
                <AiFillYoutube className="text-3xl text-red-600" />
                <span className="text-white text-xl ml-2">YouTube-Clone</span>
            </div>
            <div className="flex-1 flex justify-center gap-3">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    handleSearch();
                }} className="w-full max-w-md">
                    <div className="flex items-center w-full">
                        <div className="relative flex items-center w-full rounded-l-full focus-within:shadow-lg bg-zinc-600 overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search"
                                className="rounded-l-full px-4 py-2 w-full outline-none bg-black text-white text-sm border border-zinc-800 placeholder-stone-500"
                                value={searchTerm}
                                onChange={e=>dispatch(changeSearchTerm(e.target.value))}
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
