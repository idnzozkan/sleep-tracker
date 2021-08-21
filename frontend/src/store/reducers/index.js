import { combineReducers } from "redux"
import entryReducer from "./entryReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
  entry: entryReducer,
  auth: authReducer
})

export default rootReducer
