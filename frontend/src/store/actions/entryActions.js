import axios from "../../api.config"
import * as types from "./types"
import { setHeaders } from "../../utils"

export const loadEntries = () => async (dispatch, getState) => {
  const userId = getState().auth._id
  const entries = await axios.get(`/entries/${userId}`, setHeaders())

  dispatch({
    type: types.FETCH_ENTRIES,
    payload: {
      entries: entries.data
    }
  })
}

export const addEntry = entry => async (dispatch, getState) => {
  const userId = getState().auth._id
  await axios.post("/entries", { ...entry, userId }, setHeaders())

  dispatch({
    type: types.ADD_ENTRY
  })
}
