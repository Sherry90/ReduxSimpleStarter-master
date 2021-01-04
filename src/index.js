import React from "react"; // react 모듈을 불러와 React 변수에 할당
import ReactDOM from 'react-dom';

// Create a new component. This component should produce
// some HTML
// AIzaSyAR4yfD2CjCsoZtYvVyFZ04dOy45STHYgI
const App = function () {
    return <div>Hi!</div>
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));