import { all, put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
    console.log('Hello Sagas!')
}

/* 
all = Creates an Effect description that instructs the middleware to run multiple Effects in parallel and wait for all of them to complete.
takeEvery = Spawns a saga on each action dispatched to the store that matches pattern.
put = Creates an Effect description that instructs the middleware to schedule the dispatching of an action to the store
call = Creates an Effect description that instructs the middleware to call the function 
fork = Creates an Effect description that instructs the middleware to perform a non-blocking call on fn
*/

//WORKER SAGA: will perform the async increment task
function* incrementAsync() {
    yield delay(1000);
    yield put({ type: 'INCREMENT', payload: 2 });
}

//WATCHER SAGA: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

//single entry point to start all Sagas at once
export function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}