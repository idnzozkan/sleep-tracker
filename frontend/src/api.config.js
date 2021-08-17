import axios from "axios"

axios.defaults.baseURL = `${process.env.REACT_APP_API_BASE_URL}` || "http://localhost:8080"

export default axios
