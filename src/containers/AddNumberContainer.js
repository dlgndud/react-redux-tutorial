import AddNumber from '../components/AddNumber'

import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        onInClick:function(_mode) { dispatch({type:_mode.type, size:_mode.size}) },
        onDeClick:function(_mode) { dispatch({type:_mode.type, size:_mode.size}) }
    }
}

export default connect(null,mapDispatchToProps)(AddNumber);

/*
import React, { Component } from 'react';

import store from '../store';

// 익명(Anonymoue) 클래스 생성
// presentation에 집중할 수 있도록 components/AddNumber의 redux 종속성을 삭제
export default class extends Component {
    render() {
        return (
            <AddNumber onClick={function(size){
                store.dispatch({type:'INCREMENT', size:size})
            }.bind(this)} ></AddNumber>
        )
    }
}
*/