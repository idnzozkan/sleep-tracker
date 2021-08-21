import * as types from "../actions/types"
import jwtDecode from "jwt-decode"

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      const user = jwtDecode(action.payload)

      return {
        ...state,
        token: action.payload,
        name: user.name,
        email: user.email,
        _id: user._id
      }

    default:
      return state
  }
}

export default authReducer
