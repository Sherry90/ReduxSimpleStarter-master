import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key={video.etag}
            video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
            {/*video_list_item의 <li> 태그를 ul안에 배열로 그려준다*/}
        </ul>
    );
};

export default VideoList;