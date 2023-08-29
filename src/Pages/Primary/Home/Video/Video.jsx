import styled from "styled-components";
import HoverVideoPlayer from "react-hover-video-player";
import { useState } from "react";
import VideoFile from "./Pop_Bubble_Milk_Tea_Commercial.mp4";
import OverlayImg from "./thumbnail-image.png";

//https://github.com/Gyanreyer/react-hover-video-player
const Video = () => {
    function MyComponent() {
        return (
            <HoverVideoPlayer
                videoSrc={VideoFile}
                muted={false}
                pausedOverlay={
                    <img
                        src={OverlayImg}
                        alt="Pop Cafe Video"
                        style={{
                            // Make the image expand to cover the video's dimensions
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                }
                loadingOverlay={
                    <div className="loading-overlay">
                        <div className="loading-spinner" />
                    </div>
                }
            />
        );
    }

    return (
        <VideoStyled className="Video">
            <MyComponent />
        </VideoStyled>
    );
};

export default Video;
const VideoStyled = styled.div``;
