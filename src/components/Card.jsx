import { Link } from "react-router-dom";
import React from "react";


export default function Card({ data }) {
    console.log(data);
    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="relative w-full">
                <span className="absolute bottom-3 right-3 text-xs bg-black px-2 py-0.5 z-10 rounded-md opacity-90">
                    {data.videoDuration}
                </span>
                <Link to = {`/watch/${data.videoId}`}>
                <img
                    src={data.videoThumbnail}
                    alt="Thumbnail"
                    className="w-full aspect-video rounded-lg object-cover"
                />
                </Link>
                
            </div>
            <div className="flex gap-2">
                <div className="flex-shrink-0 min-w-fit">
                    <a href="#">
                        <img
                            src={data.channelInfo.image}
                            alt="channel Image"
                            className="h-10 w-10 rounded-full"
                        />
                    </a>
                </div>
                <div className="flex flex-col">
                    <h3>
                        <a href="#" className="text-sm font-semibold line-clamp-2">
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className="text-sm text-gray-500 mt-1">
                        <div>
                            <a href="#" className="hover:text-stone-200">
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                            <span>{data.videoViews} views</span>
                            <span>{data.videoAge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
