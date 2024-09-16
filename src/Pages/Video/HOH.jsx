import React, { useRef, useState } from "react";
import Video from "../../Component/Assets/Video/React App - Google Chrome 2024-09-12 10-11-39.mp4";

const Demo = () => {
    const videoRef = useRef(null); 
    const [isPlaying, setIsPlaying] = useState(true); 

    const handleVideoClick = () => {
        if (isPlaying) {
            videoRef.current.pause(); 
        } else {
            videoRef.current.play(); 
        }
        setIsPlaying(!isPlaying); 
    };

    return (
        <div className="relative w-full h-screen flex flex-col justify-between items-center">
            <div className="relative">
                <video
                    ref={videoRef}
                    className="w-full h-full object-contain cursor-pointer"
                    src={Video}
                    autoPlay
                    loop
                    muted
                    onClick={handleVideoClick}
                />
            </div>
            <div className="relative z-10 p-4 text-center  bg-slate-100 ">
                <h1 className="text-bold text-4xl text-yellow-600">Description</h1>
                <p className="text-2xl leading-relaxed text-black">
                I am developing a restaurant application for my friend, which features a dynamic homepage with a carousel showcasing 
                images of the restaurant. Below the images, there is a section about the restaurant, with a button that navigates users 
                to the booking page, where they can reserve a table. Additionally, there is a menu section that allows users to browse
                and select meals for <b> breakfast, lunch, snacks, and dinner</b>. Customers can place orders directly through the app, and I 
                am currently integrating a dummy payment gateway to facilitate the ordering process. The application also includes an 
               <b>"Events"</b> section where users can explore event services such as<b> birthday parties, marriage anniversaries, and client lunches</b>. </p>
            </div>
        </div>
    );
};

export default Demo;


