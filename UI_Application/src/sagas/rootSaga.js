import { put, takeLatest, all, takeEvery, fork, select, call } from 'redux-saga/effects';
import {getNumber} from './state';

function* incrementSaga() {
    console.log('came here in increment saga');
    yield fork(forkedFunction, 'parameter');// spawans a thread
    yield fork(forkedFunction1, 'parameter'); // spawns a thread
    let number = yield select(getNumber);
    let val = yield call(incrementValue, number);
    console.log('value printed', val);
  yield put({ type: "INCREMENT_COUNT", payload: {'count': val} });
}

function* forkedFunction(parameter){
    console.log('forked function', parameter);
}

function* forkedFunction1(parameter){
    console.log('forked function1', parameter);
}

function* incrementValue(integer){
    console.log(integer, integer++);
    return integer++;
}

function* incrementWatcher() {
    console.log('initialized increment watcher');        
     yield takeLatest('INCREMENT_COUNTER', incrementSaga);
}

function* decrementSaga(){
    const number = yield select(getNumber);
    console.log('this number is', number);
    console.log('put triggered for decrerment')
    yield put({type: 'DECREMENT_COUNT'});
}

function* decrementWatcher() {
    console.log('initialized decrement watcher');
     yield takeLatest('DECREMENT_COUNTER', decrementSaga)
}

export default function* rootSaga() {
   yield all([
    incrementWatcher(),
    decrementWatcher()
   ]);
}