// import React from 'react';
// class Sea rchBar extends React.Component {

import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term : ''};
        // constructor 내부에서 object 형태로 선언, 초기화
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value) } />
            </div>
        );
    }
    // onChange는 input의 변화를 감지하는, react property.
    // onChange ={}  {}내부에 이벤트 핸들러를 이용하여 이벤트 전달.

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;