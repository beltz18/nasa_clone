require('dotenv').config()

const { Router } = require('express')
const router     = Router()

router.get(process.env.ROOT, (req,res) => {
  res.send('Hello NASA!')
})

module.exports = router