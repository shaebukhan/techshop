import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';

const Videos = () => {
    const [visible, setVisible] = useState(false); // Modal visibility state
    const [videoUrl, setVideoUrl] = useState("");  // Selected video URL

    // Sample video data with thumbnails and URLs
    const videoData = [
        { id: 1, thumbnail: 'https://img.youtube.com/vi/F16OFuLEx2w/0.jpg', url: 'https://www.youtube.com/embed/F16OFuLEx2w' },
        { id: 2, thumbnail: 'https://img.youtube.com/vi/8El9Z4boSwk/0.jpg', url: 'https://www.youtube.com/embed/8El9Z4boSwk' },
        { id: 3, thumbnail: 'https://img.youtube.com/vi/2JMTMmNPVFE/0.jpg', url: 'https://www.youtube.com/embed/2JMTMmNPVFE' },
    ];

    // Function to open modal and set the video URL with autoplay
    const showModal = (url) => {
        setVideoUrl(`${url}?autoplay=1`); // Set video URL with autoplay enabled
        setVisible(true); // Open the modal
    };

    // Function to close the modal and stop the video
    const hideModal = () => {
        setVisible(false); // Close the modal
    };

    // Clear video URL when the modal closes to stop the video
    useEffect(() => {
        if (!visible) {
            setVideoUrl(""); // Reset iframe src to stop video
        }
    }, [visible]);

    return (
        <>
            <div className="videos-main">
                <h1 className="common-title text-center">
                    Our Special Products
                </h1>
                <div className="videos-sub">
                    {videoData.map((video) => (
                        <div
                            className="video-card"
                            key={video.id}
                            onClick={() => showModal(video.url)}
                        >
                            <img
                                src={video.thumbnail}
                                alt={`Video ${video.id}`}
                                style={{ width: '100%', cursor: 'pointer' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                onCancel={hideModal}
                footer={null}
                open={visible}
                maskClosable={true}
                confirmLoading={false}

                height={"30%"}
                width={"70%"}
            >
                {videoUrl && (
                    <video src={videoUrl}
                        width="100%"
                        height="100%"
                        title="Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}    >

                    </video>

                )}
            </Modal>
        </>
    );
};

export default Videos;
