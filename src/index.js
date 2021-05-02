import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from "./component/search_bar";

const API_KEY = 'AIzaSyAR4yfD2CjCsoZtYvVyFZ04dOy45STHYgI';
//npm install --save youtube-api-search

// Create a new component. This component should produce
// some HTML
// AIzaSyAR4yfD2CjCsoZtYvVyFZ04dOy45STHYgI

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
        );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
