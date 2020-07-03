// store 생성할때 미들웨어 설정
import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
// import loggerMiddleware from './lib/loggerMiddleware'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import penderMiddleware from 'redux-pender'

// 미들웨어가 여러개인 경우 파리미터로 여러개 전달 ex) applyMiddleware(a, b, c)
// 파라미터 순서대로 미들웨서 순서 결정
// const store = createStore(modules, applyMiddleware(loggerMiddleware))

const logger = createLogger()

const store = createStore(modules, applyMiddleware(logger, ReduxThunk, penderMiddleware()))
export default store;