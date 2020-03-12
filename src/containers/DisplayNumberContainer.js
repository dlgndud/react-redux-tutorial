import DisplayNumber from '../components/DisplayNumer';
import { connect } from 'react-redux';

// redux store 변경시 호출되며... 함수의 인자값은 약속된 state
function mapReduxStateToReactProps(state) {
    return {
        number:state.number
    }
}

/* TB-BR connect()함수를 실행하면 리턴값이 함수로 오는데 여기서 다시 함수를 실행, prop 자동 전송 등 */
export default connect(mapReduxStateToReactProps)(DisplayNumber);

/* AS-IS
import React, { Component } from 'react';

import store from '../store'

export default class extends Component {

    state = {number:store.getState().number}

    constructor(props) {
        super(props);
        store.subscribe(function(){
            this.setState({number:store.getState().number});

        }.bind(this));
    }

    render() {
        return(
            <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
        )
    }
}
*/
