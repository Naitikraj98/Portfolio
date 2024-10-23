import React, { useRef, useState } from "react";
import Video from "../../Component/Assets/Video/Todo list.mp4"

const Todo = () => {
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
                    I developed this project for my recent client project, I developed a <b>fully functional to-do list application</b> that includes a <b>login and signup page</b>
                    with <b>form validation</b>. The application is designed with an intuitive user interface and is built to allow users to manage their tasks efficiently. When a
                    user first lands on the application, they are presented with the option to either sign up or log in. The signup page includes necessary validation checks to 
                    ensure users input <b>valid information such as a unique username and a strong password</b>. Once a user logs in successfully,they are redirected to the main to-do list
                    page, where their <b>username is displayed at the top as a personalized greeting</b>.

                    The to-do list page is the core feature of the application, where <b>users can add, update, and delete tasks seamlessly</b>. Each task created by the user 
                    can be marked as either active or completed. To make task management easy, I provided a dedicated <b>"Mark as Completed" button for each task</b>. This allows
                    users to distinguish between completed tasks and those still pending. If a task is marked as completed, it is displayed differently to visually 
                    differentiate it from active tasks, enhancing the user experience.

                   In addition, users have the ability to delete tasks they no longer need, providing them full control over their task list. The application is responsive 
                   and user-friendly, ensuring that users can manage their tasks across various devices.












                </p> </div>
        </div>
    );
};

export default Todo;
