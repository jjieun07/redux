import { createAction } from 'redux-actions'

const INIT = 'INIT'
const DETAIL = 'DETAIL'
const EDIT = 'EDIT'
const REMOVE = 'REMOVE'
const CREATE = 'CREATE'

export const init = createAction(INIT, obj => obj)
export const detail = createAction(DETAIL, key => key)
export const edit = createAction(EDIT, editObj => editObj)
export const remove = createAction(REMOVE, removedObj => removedObj)
export const create = createAction(CREATE, newObj => newObj)

const initialState = {
  selectedKey: 0,
  // selectedKey: -1,
  contactData: [{
    name: 'David',
    phone: '010-1223-5678'
  }, {
    name: 'Albert',
    phone: '010-1223-1234'
  }, {
    name: 'John',
    phone: '010-5678-5678'
  }, {
    name: 'Wade',
    phone: '010-4312-5678'
  }]
}

export default function reducer(state = initialState, action) {
  let before = state.contactData.slice(0, state.selectedKey)
  let after = state.contactData.slice(state.selectedKey + 1)

  switch (action.type) {
    case INIT:
      return { ...state, contactData: action.payload }
    case DETAIL:
      return { ...state, selectedKey: action.payload }
    case EDIT:
      return { ...state, contactData: [...before, action.payload, ...after] }
    case REMOVE:
      return { ...state, contactData: [...before, ...after] }
    case CREATE:
      return { ...state, contactData: [...state.contactData, action.payload] }
    default:
      return state
  }
}