import { createAction, handleActions } from 'redux-actions'

import axios from 'axios'
import { pender } from 'redux-pender/lib/utils'

function getPostAPI(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST'
// const GET_POST_PENDING = 'GET_POST_PENDING'
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
// const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const getPost = createAction(GET_POST, getPostAPI)

// export const getPost = (postId) => dispatch => {
//   //요청이 시작됬다는 것을 알림
//   dispatch({ type: GET_POST_PENDING })

//   // 요청 시작
//   // 여기서 만든 promise 를 return 해줘야 나중에 컴포넌트에서 호출 할 때 getPost(),then(...)을 할 수 있음
//   return getPostAPI(postId).then(
//     (response) => {
//       // 요청성공 -> 서버 응답내용을 payload로 설정하여 GET_POST_SUCCESS 액션 디스패치
//       dispatch({
//         type: GET_POST_SUCCESS,
//         payload: response
//       })
//     }
//   ).catch(error => {
//     // 에러발생 -> 에러 내용을 payload로 설정하여 GET_POST_FAILURE 액션 디스패치
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: error
//     })
//   })
// }

const initialState = {
  // pending: false,
  // error: false,  // redux-pender -> 요청이 진행중인지, 에러가 났는지의 여부는 관리할 필요가 없다
  data: {
    title: '',
    body: ''
  }
}

export default handleActions({
  ...pender({
    type: GET_POST,  // type이 주어지면, type에 접미사를 붙인 액션핸들러들이 담긴 객체 생성
    /*
      요청중/ 실패 했을 때 추가적으로 해야 할 작업이 있으면 onPending/ onFailure 추가
      onPending: (state, action) => state,
      onFailure: (state, action) => state
    */
    onSuccess: (state, action) => {
      const { title, body } = action.payload.data;
      return {
        data: {
          title,
          body
        }
      }
    }
  })
}, initialState)

// export default handleActions({
//   [GET_POST_PENDING]: (state, action) => {
//     return {
//       ...state,
//       pending: true,
//       error: false
//     }
//   },
//   [GET_POST_SUCCESS]: (state, action) => {
//     const { title, body } = action.payload.data
//     return {
//       ...state,
//       pending: false,
//       data: {
//         title, body
//       }
//     }
//   },
//   [GET_POST_FAILURE]: (state, action) => {
//     return {
//       ...state,
//       pending: false,
//       error: true
//     }
//   }
// }, initialState)
