import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actionTypes/counterActiontypes';

const incrementCount = () => ({
  type: INCREMENT_COUNTER,
})

const decrementCount = () => ({
    type: DECREMENT_COUNTER,
  })

export default {incrementCount, decrementCount};
