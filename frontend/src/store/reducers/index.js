import { combineReducers } from "redux"
import entryReducer from "./entryReducer"

const rootReducer = combineReducers({
  entry: entryReducer
})

export default rootReducer
