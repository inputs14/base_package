import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import counterActions from '../../actions/counterActions';
import Notifications from '../Notifications/Notifications.jsx';

class Counter extends React.Component {

  constructor(props){
    super();
    this.state = {
      showNotification: false,
    };
  }

    render() {

      return (
        <div>
            Current Product Count: {this.props.count}
            <button onClick={this.props.actions.incrementCount}>+</button>
            <button onClick={this.props.actions.decrementCount}>-</button>
            <div>
              <button onClick={()=>
                this.setState({showNotification: !this.state.showNotification})}>
                  Show / Hide Notification</button>
            </div>
            {this.state.showNotification && <Notifications />}
        </div>
      );
    }
  }

  const mapStateToProps = store => ({
    count: store.counter.count
   })

    const mapDispatchToProps = dispatch => ({
        actions: bindActionCreators(counterActions, dispatch)
   })

  export default connect(mapStateToProps, mapDispatchToProps)(Counter);