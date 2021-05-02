import React, {Component} from "react";

class SearchBar extends Component {
    render() {
        return <input onChange={(event) => console.log(event.target.value)} />; // onChange : react property 변경 event를 감지.
    }

    /*
    onInputChange(event) { // event 객체는 이벤트 발생에 대한 정보나 컨텍스트를 의미
        console.log(event.target.value);
        //console.log(event);
    } // <input /> input event handler

     */

}

export default SearchBar;