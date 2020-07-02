const loggerMiddleware = store => next => action => {
  // 현재 스토어 상태값 기록
  console.log('현재 상태', store.getState());

  //액션 기록
  console.log('액션', action);

  // 액션을 다음 미들웨어, 혹은 리듀서로 넘김
  const result = next(action)

  // 액션처리 후의 스토어 상태 기록
  console.log('다음 상태', store.getState());
  console.log('\n');

  return result;  // 반환값은 store.dispatch(ACTION_TYPE) 했을때의 결과로 설정
}

export default loggerMiddleware