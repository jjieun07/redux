// 카운터 관련 상태 로직

import { createAction, handleActions } from 'redux-actions'

// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수 _ 다른 파일에서 불러와야 됨
// export const increment = () => ({ type: INCREMENT })
// export const decrement = () => ({ type: DECREMENT })

// createAction 함수 사용하여 액션 생성 함수 작성
export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)

const initialState = {
  number: 0
}


// 리듀서
// export default function reducer(state = initialState, action) {
//   // 액션 타입에 따라 변화된 상태를 정의하여 반환
//   switch (action.type) {
//     case INCREMENT:
//       return { number: state.number + 1 }
//     case DECREMENT:
//       return { number: state.number - 1 }
//     default:
//       return state  // 아무일도 일어나지 않으면 현재 상태 그대로 반환
//   }
// }

// 첫번째 파라미터 -> 액션을 처리하는 함수들로 이루어진 객체
// 두번째 파라미터 -> 초기 상태
export default handleActions({
  [INCREMENT]: (state, action) => {
    return { number: state.number + 1 };
  },
  [DECREMENT]: ({ number }) => ({ number: number - 1 })
}, initialState);