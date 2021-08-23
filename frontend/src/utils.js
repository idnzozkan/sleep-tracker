export const setHeaders = () => {
  return {
    headers: {
      "x-auth-token": localStorage.getItem("token")
    }
  }
}
