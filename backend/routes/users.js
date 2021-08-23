const router = require("express").Router()
const Joi = require("joi")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const Entry = require("../models/entry")
const durationCalculator = require("../lib/duration-calculator")

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required().min(2).max(30),
    username: Joi.string().required().min(2).max(20),
    email: Joi.string().required().email().min(3).max(200),
    password: Joi.string().required().min(6).max(200),
    profilePhoto: Joi.string().optional()
  })

  const { error } = schema.validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    let user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).send("User with that email already exist!")

    user = await User.findOne({ username: req.body.username })
    if (user) return res.status(400).send("User with that username already exist!")

    const { name, username, email, password, profilePhoto } = req.body

    user = new User({
      name,
      username,
      email,
      password,
      profilePhoto
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save()

    const secretKey = process.env.JWT_SECRET_KEY
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, secretKey)

    res.send(token)
  } catch (error) {
    res.status(500).send(error.message)
    console.log(error.message)
  }
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
