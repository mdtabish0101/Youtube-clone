import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/userApp";
import { getHomePageVideos } from "../store/Reducers/getHomePageVideos";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";

export const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden bg-black text-gray-100">
      <div className="fixed top-0 left-0 right-0 h-[7.5vh] z-20 bg-black shadow-md">
        <Navbar />
      </div>
      <div className="flex flex-col lg:flex-row" style={{ height: "92.5vh", marginTop: "7.5vh" }}>
        <div className="hidden lg:block w-64 flex-shrink-0 fixed h-full">
          <Sidebar />
        </div>
        <div className="flex-grow lg:ml-64 overflow-y-auto">
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length < 100}
              loader={<Spinner />}
              style={{ overflow: "hidden" }}
            >
              <div className="grid gap-y-14 gap-x-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-8">
                {videos.map((item) => (
                  <Card data={item} key={item.videoId} />
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
