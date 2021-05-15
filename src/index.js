import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
const API_KEY = 'AIzaSyAR4yfD2CjCsoZtYvVyFZ04dOy45STHYgI';
import VideoDetail from "./components/video_detail";
//npm install --save youtube-api-search

class App extends Component{
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            KeyVideos:[],
            selectedVideo: null

        };
        this.videoSearch('cat');

    }

    videoSearch(term) {
        //YTSearch({key: API_KEY, term: 'cat'}, (videos) => {
        YTSearch({key: API_KEY, term: term}, (valVideos) => {
            //console.log(videos);
            //this.setState({ videos });
            this.setState({
                KeyVideos: valVideos,
                selectedVideo: valVideos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos = {this.state.KeyVideos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
