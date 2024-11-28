import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/userApp";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { getSearchPageVideos } from "../store/Reducers/getSearchPageVideos";
import { useNavigate } from "react-router-dom";
import { clearVideos } from "../features/counter/youtubeSlice";
import Searchcard from "../components/Searchcard"
export const Search = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    useEffect(() => {
        dispatch(clearVideos());
        if (searchTerm === "") {
            navigate("/");
        } else {
            dispatch(getSearchPageVideos(false));
        }
    }, [dispatch, navigate, searchTerm]);

    return (
        <div className="max-h-screen overflow-hidden bg-black text-gray-100">
            <div className="fixed top-0 left-0 right-0 h-[7.5vh] z-20 bg-black shadow-md">
                <Navbar />
            </div>
            <div
                className="flex flex-col lg:flex-row"
                style={{ height: "92.5vh", marginTop: "7.5vh" }}
            >
                <div className="hidden lg:block w-64 flex-shrink-0 fixed h-full">
                    <Sidebar />
                </div>
                <div className="flex-grow lg:ml-64 overflow-y-auto">
                    {videos.length ? (
                        <InfiniteScroll
                            dataLength={videos.length}
                            next={() => dispatch(getSearchPageVideos(true))}
                            hasMore={videos.length < 100}
                            loader={<Spinner />}
                            style={{ overflow: "hidden" }}
                        >
                            <div className="flex flex-col gap-6 p-4">
                                {videos.map((item) => (
                                    <Searchcard data={item} key={item.videoId} />
                                ))}
                            </div>
                        </InfiniteScroll>
                    ) : (
                        <Spinner />
                    )}
                </div>
            </div>
        </div>
    );
};
