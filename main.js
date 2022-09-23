import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "@redux-saga/core"
import Counter from './Counter'
import reducer from './reducers'

import { rootSaga } from './sagas'

const sagaMiddleWare = createSagaMiddleware(); //creamos el middleware
const store = createStore(reducer,
  applyMiddleware(sagaMiddleWare)
); //creamos el store con el reducer y aplicando el middleware

sagaMiddleWare.run(rootSaga);

const action = type => store.dispatch({ type, payload: 1 })

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
