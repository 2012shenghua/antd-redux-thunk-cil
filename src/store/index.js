import { applyMiddleware, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from '../reducers/index'

function createStoreFunc (rootRedux) {
  const store = createStore(rootRedux, compose(applyMiddleware(ReduxThunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
  return store
}

const store = createStoreFunc(reducer);
export default store