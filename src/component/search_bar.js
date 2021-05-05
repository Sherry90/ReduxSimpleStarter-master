import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) { // js class가 실행될 때 가장 먼저 실행됨
        super(props); // 부모클래스 Component에 정의된 메소드

        this.state = {term : ''}; // 이 스테이트를 사용할 때마다 새로운 오브젝트를 생성하면서 초기화한다?
        // term object에는 property가 포함되어있고 this.state에 저장된다.
        // 유저가 search input에 값을 입력할 때마다 property term이 업데이트됨.
        // term은 아무 이름이나 가능.
    }

    render() {
        //return <input onChange={(event) => console.log(event.target.value)} />; // onChange : react property 변경 event를 감지.
        return (
            <div>
                <input
                    value = {this.state.term}
                    onChange={(event) => this.setState({term: event.target.value})}/>
                {/*// 건네고자 하는 새로운 state를 담은 객체*/}
                {/*// constructor 안의 this.state는 this.setState으로 변경된다.*/}
            </div>
        );
    }

    /*
    onInputChange(event) { // event 객체는 이벤트 발생에 대한 정보나 컨텍스트를 의미
        console.log(event.target.value);
        //console.log(event);
    } // <input /> input event handler

     */

}

export default SearchBar;