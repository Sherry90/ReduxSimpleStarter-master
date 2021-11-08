import React from 'react';
import VideoListItem from './video_list_item'
const VideoList = (props) => {
    console.log(props);
    return(
        <ul className="col-m-4 list-group">
            {props.videos.length}
        </ul>
    );
}

export default VideoList;