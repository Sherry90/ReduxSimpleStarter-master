import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyAR4yfD2CjCsoZtYvVyFZ04dOy45STHYgI";
// npm install --save youtube-api-search

class App extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            videoData: [],
            selectVideo : null
        };

        this.videoSearch('cat');
    }

    videoSearch(term) {
        // YTSearch p1. 구성옵션을 object로 넘김, p2 callback 함수
        YTSearch({key : API_KEY, term : term}, (videoData) => {
            this.setState({
                videoData : videoData,
                selectVideo : videoData[0]
            });
        });
    }

    render() {
        // debounce 함수는 입력한 ms 마다 호출된다
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        //console.log(this.state.videoData);
        return (
            <div>
                <SearchBar onSearchTermChange ={videoSearch} />
                <VideoDetail video = {this.state.selectVideo} />
                <VideoList
                    onVideoSelect = {selectVideo => this.setState({selectVideo})}
                    videos = {this.state.videoData} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));