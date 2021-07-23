const router = require("express").Router()
const User = require("../models/user")
const Entry = require("../models/entry")
const durationCalculator = require("../lib/duration-calculator")

router.get("/", async (req, res) => {
  const users = await User.find()

  res.send(users)
})

router.post("/", async (req, res) => {
  const userToCreate = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profilePhoto: req.body.profilePhoto
  }

  await User.create(userToCreate)

  res.send("OK")
})

router.get("/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId)

  res.send(user)
})

router.post("/:userId/entries", async (req, res) => {
  const user = await User.findById(req.params.userId)

  let { date, sleepTime, wakeupTime } = req.body

  sleepTime = new Date(`${date} ${sleepTime}`)
  wakeupTime = new Date(`${date} ${wakeupTime}`)
  date = new Date(date)
  const duration = durationCalculator(sleepTime, wakeupTime)

  const entryToCreate = {
    user,
    date,
    sleepTime,
    wakeupTime,
    duration
  }

  const entry = await Entry.create(entryToCreate)
  user.entries.push(entry)
  await user.save()

  res.send(entry)
})

module.exports = router
