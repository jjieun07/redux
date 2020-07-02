import { createStore } from 'redux'
import modules from './modules'

const configure = () => {
  // const store = createStore(modules);
  // redux-devtools(크롬 익스텐션) 사용 위해 수정
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(modules, devTools)

  return store;
}

export default configure;