import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./component/search_bar";
import VideoList from "./component/video_list";
const API_KEY = 'AIzaSyAR4yfD2CjCsoZtYvVyFZ04dOy45STHYgI';
//npm install --save youtube-api-search

class App extends Component{
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = { KeyVideos:[] };

        //YTSearch({key: API_KEY, term: 'cat'}, (videos) => {
        YTSearch({key: API_KEY, term: 'cat'}, (valVideos) => {
            //console.log(videos);
            //this.setState({ videos });
            this.setState({ KeyVideos: valVideos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos = {this.state.KeyVideos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
