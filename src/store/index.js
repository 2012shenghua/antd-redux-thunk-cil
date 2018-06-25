import { applyMiddleware, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from '../reducers/index'

function createStoreFunc (rootRedux) {
  const store = createStore(rootRedux,applyMiddleware(ReduxThunk))
  return store
}

const store = createStoreFunc(reducer);
export default store