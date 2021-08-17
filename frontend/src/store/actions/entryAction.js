import axios from "../../api.config"
import * as types from "./types"

export const loadEntries = () => async dispatch => {
  const entries = await axios.get("/entries")

  console.log("action worked", entries)

  dispatch({
    type: types.FETCH_ENTRIES,
    payload: {
      entries: entries.data
    }
  })
}

export const addEntry = entry => async dispatch => {
  await axios.post("/entries", { entry })

  dispatch({
    type: types.ADD_ENTRY
  })
}
