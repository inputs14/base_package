import React from 'react';

export default class LifeCycle extends React.Component{

    constructor(props){
        console.log('constructor invoked');
        super(props);
        this.state = {
            val : 0
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('method triggered', props, state);
          if(props.value != state.val){
            return {'val': props.value}
        }
        return null;
      }
    

    shouldComponentUpdate(props, state){
        console.log('should component update triggered', state, props);
        return true;
    }

    componentDidMount(){
        console.log('component did mount');
    }

    componentDidUpdate(props, state){
        console.log('did update triggered', props, state);
         if(props.value != state.val){
            console.log('change triggered did update');
         }
    }

    componentWillUnmount(){
        console.log('component UnMounted');
    }

    render(){
        console.log('render method called');
        return(<div>
            <div>the value in state {this.state.val}</div>
            <div>the value in props{this.props.value}</div>
            </div>);
    }
}
