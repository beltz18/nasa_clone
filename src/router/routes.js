require('dotenv').config()

const { Router } = require('express')
const router     = Router()

router.get(process.env.ROOT, async (req,res) => {
  const arr  = await require('../../util/global')
  res.render('index', { img: arr })
})

module.exports = router