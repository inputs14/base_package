import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actionTypes/counterActiontypes';

const incrementCount = () => ({
  type: INCREMENT_COUNT,
})

const decrementCount = () => ({
    type: DECREMENT_COUNT,
  })

export default {incrementCount, decrementCount};
