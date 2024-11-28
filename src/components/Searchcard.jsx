import { Link } from "react-router-dom";
import React from "react";

export default function Card({ data }) {
    return (
        <div className="flex gap-4 w-full py-4 border-b border-gray-800">
            <div className="flex-shrink-0 w-1/3 max-w-[200px] relative">
                <span className="absolute bottom-2 right-2 text-xs bg-black px-1.5 py-0.5 z-10 rounded-md opacity-90">
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
            <div className="flex flex-col justify-start w-2/3 text-sm">
                <h3 className="font-semibold line-clamp-2 text-base text-white">
                    <a href="#" className="hover:text-gray-300">
                        {data.videoTitle}
                    </a>
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-xs mt-2">
                    <img
                        src={data.channelInfo.image}
                        alt="Channel Image"
                        className="h-6 w-6 rounded-full"
                    />
                    <a href="#" className="hover:text-gray-300">
                        {data.channelInfo.name}
                    </a>
                </div>
                <div className="flex items-center space-x-1 text-gray-400 text-xs mt-1">
                    <span>{data.videoViews} views</span>
                    <span>•</span>
                    <span>{data.videoAge}</span>
                </div>
                <p className="text-gray-400 text-xs mt-3 line-clamp-2">
                    {data.videoDescription}
                </p>
            </div>
        </div>
    );
}
