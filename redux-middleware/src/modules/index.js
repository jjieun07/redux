import { combineReducers } from 'redux';
import counter from './counter';
import post from './post'
import { penderReducer } from 'redux-pender'

export default combineReducers({
    counter,
    post,
    pender: penderReducer   // 요청 관리 리듀서
});

//**************리듀서 상태***************//
// {
//      pending: {}
//      success: {}
//      failure: {}
//  }

//********새 프로미스 액션 디스패치 시*********//
// {
//     pending: {
//         'ACTION_NAME': true
//     },
//     success: {
//         'ACTION_NAME': false
//     },
//     failure: {
//         'ACTION_NAME': false
//     }
// }

//****************요청 성공*****************//
// {
//     pending: {
//         'ACTION_NAME': false
//     },
//     success: {
//         'ACTION_NAME': true
//     },
//     failure: {
//         'ACTION_NAME': false
//     }
// }

//****************요청 실패*****************//
// {
//     pending: {
//         'ACTION_NAME': false
//     },
//     success: {
//         'ACTION_NAME': false
//     },
//     failure: {
//         'ACTION_NAME': true
//     }
// }