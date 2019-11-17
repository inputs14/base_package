import React from "react";
import ReactDOM from "react-dom";
import Form from './components/Form.jsx';
import PropsExample from './components/PropsExample.jsx';
import { Provider } from 'react-redux'
import Counter from './components/Counter/Counter.jsx';
import configureStore from './store';

const App = () => {

  // const propFunction = (value) => {console.log('In INdex', value)}
  // const text = "Enter the amount to pay";
  return <div><h1>Welcome Team Inputs...</h1>
    {/* <Form/>
    <PropsExample label={text} propFunction={propFunction}/> */}
    <Counter />
  </div>;
};

ReactDOM.render(
<Provider store={configureStore()}>
  <App />
</Provider>, document.getElementById("root"));