export const setHeaders = () => {
  return {
    headers: {
      "x-auth-token": localStorage.getItem("token")
    }
  }
}

export const calculateAverageOfTimes = arr => {
  const totalMins = arr.reduce((total, item) => (total += +item.split(":")[1]), 0)
  const totalMinsAsHours = +(totalMins / 60).toFixed(15)

  const totalHours =
    arr.reduce((total, item) => (total += +item.split(":")[0]), 0) + totalMinsAsHours

  const average = totalHours / arr.length

  let time = new Date(0, 0)

  time.setSeconds(average * 60 * 60)

  return time.toTimeString().slice(0, 8)
}
