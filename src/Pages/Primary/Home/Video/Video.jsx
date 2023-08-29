import styled from "styled-components";
import HoverVideoPlayer from "react-hover-video-player";

//https://github.com/Gyanreyer/react-hover-video-player
const Video = () => {
    function MyComponent() {
        return (
            <HoverVideoPlayer
                videoSrc="./Pop_Bubble_Milk_Tea Commercial.mp4"
                pausedOverlay={
                    <img
                        src="./thumbnail-image.png"
                        alt=""
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

    return <VideoStyled className="Video">Video</VideoStyled>;
};

export default Video;
const VideoStyled = styled.div``;
