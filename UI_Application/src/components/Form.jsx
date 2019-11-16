import React from 'react';
import {Button} from 'react-bootstrap';

export default class Form extends React.Component {

  constructor(){
    super();
    this.state = {
      'value': ''
    };
  }

  renderValue(text){
    this.setState({'value': text});
  }

  renderText(text, index){
    return(<div key={index} onClick={() => this.renderValue(text)}>{text}</div>);
  }

    render() {
      let array = ['React  Home', 'React Intro', 'React Get Sarted'];

      return (
        <div><h2>Hi, I am a Form!</h2>
        {array.map((value, index) => this.renderText(value, index))}
      <div>{this.state.value}</div>
        </div>
      );
    }
  }