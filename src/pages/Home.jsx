import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from '../hooks/userApp';
import { getHomePageVideos } from '../store/Reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/Card';

export const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  // Fetch videos on component mount
  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  // Log videos when updated
  useEffect(() => {
    console.log("Updated videos:", videos);
  }, [videos]);

  return (
    <div className='max-h-screen overflow-auto'>
      <div >
        <Navbar />
      </div>
      <div className='flex'>
        <Sidebar />
        {
          videos.length ? (
            <InfiniteScroll
              dataLength={videos.length} next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={650}
            >
              <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
                {videos.map((item) => {
                  return <Card data={item} key={item.videoId} />
                })}
              </div>

            </InfiniteScroll>
          ) : (
            <Spinner />)
        }

      </div>
    </div>
  );
};
