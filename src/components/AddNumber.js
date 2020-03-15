import React, { Component } from 'react';

export default class AddNumber extends Component {

    state = {
      size:1
    }
    
    render() {
      return(
        <div>
          <h1>Add Number</h1>
          <input type='button' value='+' onClick={
            () => {
                let _data = {}
                _data.type='INCREMENT';
                _data.size=this.state.size;
                this.props.onInClick(_data);
              }
            } ></input>
          <input type='button' value='-'
            onClick={
              () => {
                let _data = {}
                _data.type='DECREMENT';
                _data.size=this.state.size;

                this.props.onDeClick(_data);
              }
            } ></input>
          <input type='text' value={this.state.size} onChange={function(e){
              this.setState({size:Number(e.target.value)})
          }.bind(this)}></input>
        </div>
      )
    }
  }