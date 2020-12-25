import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import SearchBar from "./components/search_bar";

const API_KEY = 'AIzaSyAR4yfD2CjCsoZtYvVyFZ04dOy45STHYgI';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectVideo: null
        };

        this.videoSearch('cat');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos : videos,
                selectVideo: videos[0]
            });
            // this.setState({ videos: videos})
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectVideo}/>
                <VideoList
                    onVideoSelect ={selectVideo => this.setState({selectVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));