import React from "react"

import clip from "../../../assets/video/Untitled.mp4"

const Home = () => {
    return (
        <div className="home_welcome">
            <div className="video_block">
                <video 
                    autoPlay 
                    muted="muted"
                    loop
                    poster="../../../assets/img/home/Poster.png"
                    preload="auto"
                >
                <source 
                    src={clip} 
                    type="video/mp4" 
                />
                Your browser does not support HTML5 video.
                </video>
            </div>

            <div className="hero">
                <h1 className="hero_title">Тарас Лисенко</h1>
                <h5 className="hero_description">Front-end розробник</h5>
            </div>
        </div>
    )
} 

export default Home