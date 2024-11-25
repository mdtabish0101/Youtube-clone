
import React from 'react'

export default function Card({ data }) {
    console.log(data)
    return (
        <div className='flex flex-col w-64 gap-2'>
            <div className='relative w-full'>

                <span className='absolute bottom-2 right-2 text-xs bg-black px-2 py-0.5 z-10 rounded-md opacity-90'>
                    {data.videoDuration}
                </span>
                <img src={data.videoThumbnail} alt="Thumbnail" className='w-full h-36 rounded-lg object-cover'/>
            </div>
            <div className='flex gap-3'>
                <div className='flex-shrink-0'>
                    <a href="#">
                        <img src={data.channelInfo.image} alt='channel Image' className='h-10 w-10 rounded-full'/>
                    </a>
                </div>
                <div className='flex flex-col'>
                    <h3>
                        <a href="#" className='text-sm font-semibold line-clamp-2'>
                            {data.videoTitle} 
                        </a>
                    </h3>
                    <div className='text-sm text-gray-500 mt-1'>
                        <div>
                            <a href="#" className='hover:text-stone-200'>
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <div className='flex items-center space-x-1 mt-1'>
                            <span>
                                {data.videoViews} views
                            </span>
                            <span>
                                {data.videoAge}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
