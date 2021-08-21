import axios from "../../api.config"
import * as types from "./types"

export const signUp = user => async dispatch => {
  try {
    const token = await axios.post("/users", user)

    localStorage.setItem("token", token.data)

    dispatch({
      type: types.SIGN_UP,
      payload: token.data
    })
  } catch (error) {
    console.log(error)
  }
}
