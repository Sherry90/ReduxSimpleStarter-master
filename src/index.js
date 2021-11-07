import React, { Component } from 'react';
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
const API_KEY = "AIzaSyAR4yfD2CjCsoZtYvVyFZ04dOy45STHYgI";
// npm install --save youtube-api-search

class App extends Component  {
    constructor(props) {
        super(props);

        this.state = { video: [] };

        // YTSearch p1. 구성옵션을 object로 넘김, p2 callback 함수
        YTSearch({key : API_KEY, term : 'cat'}, (videoData) => {
            this.setState({ videoData });
            //this.setState({ videoData : videoData});
        });
    }
    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));