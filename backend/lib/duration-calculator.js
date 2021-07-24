const durationCalculator = (sleepTime, wakeupTime) => {
  const durationHours = new Date(wakeupTime - sleepTime).getUTCHours()
  const durationMinutes = new Date(wakeupTime - sleepTime).getUTCMinutes()
  const duration = durationHours + durationMinutes / 60

  return duration
}

module.exports = durationCalculator
