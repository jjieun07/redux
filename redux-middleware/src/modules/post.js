import { handleActions } from 'redux-actions'

import axios from 'axios'

function getPostAPI(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST_PENDING = 'GET_POST_PENDING'
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const getPost = (postId) => dispatch => {
  //요청이 시작됬다는 것을 알림
  dispatch({ type: GET_POST_PENDING })

  // 요청 시작
  // 여기서 만든 promise 를 return 해줘야 나중에 컴포넌트에서 호출 할 때 getPost(),then(...)을 할 수 있음
  return getPostAPI(postId).then(
    (response) => {
      // 요청성공 -> 서버 응답내용을 payload로 설정하여 GET_POST_SUCCESS 액션 디스패치
      dispatch({
        type: GET_POST_SUCCESS,
        payload: response
      })
    }
  ).catch(error => {
    // 에러발생 -> 에러 내용을 payload로 설정하여 GET_POST_FAILURE 액션 디스패치
    dispatch({
      type: GET_POST_FAILURE,
      payload: error
    })
  })
}

const initialState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: ''
  }
}

export default handleActions({
  [GET_POST_PENDING]: (state, action) => {
    return {
      ...state,
      pending: true,
      error: false
    }
  },
  [GET_POST_SUCCESS]: (state, action) => {
    const { title, body } = action.payload.data
    return {
      ...state,
      pending: false,
      data: {
        title, body
      }
    }
  },
  [GET_POST_FAILURE]: (state, action) => {
    return {
      ...state,
      pending: false,
      error: true
    }
  }
}, initialState)