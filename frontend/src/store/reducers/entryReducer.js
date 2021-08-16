import * as types from "../actions/types"

const initialState = {
  entry: {
    date: "",
    sleepTime: "",
    wakeupTime: ""
  },
  entries: []
}

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ENTRIES:
      return {
        ...state,
        entries: action.payload.entries
      }
    case types.ADD_ENTRY:
      return {
        ...state,
        entry: action.payload.entry
      }
    default:
      return state
  }
}

export default entryReducer
