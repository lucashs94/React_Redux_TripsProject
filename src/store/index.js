import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import combineReducers from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const enhancer = applyMiddleware(sagaMiddleware)

const store = createStore(combineReducers, enhancer)

sagaMiddleware.run(rootSaga)

export default store