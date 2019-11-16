import React from 'react';

export default class PropsExample extends React.Component{


    constructor(){
        super();
        this.state = {
            value: 0
        }
        this.sendValue = this.sendValue.bind(this);
    }

    setValue(event){
        console.log(event);
        this.setState({value: event.target.value});
    }

    sendValue(){
        console.log('sendValue triggered')
        this.props.propFunction(this.state.value);
    }


    render(){
        console.log(this.state.value);
        return(
            <div>
                <p>PropsExample</p>
                {this.props.label}
                <input type = "text" onChange={this.setValue.bind(this)}></input>
                <input type = "button" onClick={this.sendValue}></input>
                </div>
        );
    }
}