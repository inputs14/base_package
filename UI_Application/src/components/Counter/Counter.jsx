import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import counterActions from '../../actions/counterActions';
import LifeCycle from '../LifeCycle.jsx';

class Counter extends React.Component {

  constructor(props) {
    super();
  }

  renderLifeCycle() {
    if (this.props.count > 0) {
      return (<LifeCycle value={this.props.count} />);
    }
  }

  render() {
    return (
      <div>
        Current Product Count: {this.props.count}
        <button onClick={this.props.actions.incrementCount}>+</button>
        <button onClick={this.props.actions.decrementCount}>-</button>
        {this.renderLifeCycle()}
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