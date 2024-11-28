import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks/userApp';
import { Navbar } from '../components/Navbar';
import { getRecommendedVideo } from '../store/Reducers/getRecommendedVideo';
import { getVideoDetails } from '../store/Reducers/getVideoDetails';



export default function Watch() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );
  const recommendedVideo = useAppSelector(
    (state) => state.youtubeApp.recommendedVideo
  )

  useEffect(()=>{
    if(id){
      dispatch(getVideoDetails(id))
    }
    else{
      navigate("/")
    }
  },[id, navigate, dispatch])

  useEffect(()=>{
    if(currentPlaying && id){
      dispatch(getRecommendedVideo(id))
    }
  },[currentPlaying, dispatch, id])
  return (
    <div>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden bg-black text-gray-100">
        <div className="fixed top-0 left-0 right-0 h-[7.5vh] z-20 bg-black shadow-md">
          <Navbar/>
        </div>
          <div>
            <div>
              <div>
                <iframe src="https://www.youtube.com/embed/${id}?autoplay=1"
                 frameborder="0"
                 width={800}
                 height={502}
                 allowFullScreen
                 title='Youtube Player'>

                 </iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
