import React, { useRef, useState } from "react";
import Video from "../../Component/Assets/Video/React App - Drag&Drop.mp4";

const Drag = () => {
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
                    I developed this project for a colleague. The task was to create a UI page with an "Edit" button. 
                    Upon clicking the "Edit" button, the application navigates to a new page featuring a navigation 
                    bar. On the left side of this page, there are "Save" and "Exit" buttons, along with forward and 
                    backward icons. Additionally, the navigation bar includes tabs for "Home," "Events," and "Demo"

                    In edit mode, I implemented drag-and-drop functionality, allowing users to drag and reposition 
                    text on the page. The "Save" and "Exit" buttons remain disabled by default and only become active
                    when a text element is clicked.

                    Additionally, I included two icons—one for mobile view and another for laptop view. When the mobile 
                    icon is clicked, the interface switches to a mobile device layout. Clicking the laptop icon reverts 
                    the interface to the standard view. I also added a download option, allowing users to download their
                    work when needed.
                </p> </div>
        </div>
    );
};

export default Drag;


