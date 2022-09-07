require('dotenv').config()

const { Router } = require('express')
const router     = Router()
const { title, arrUl1, arrUl2, arrUl3, infoS } = require('../../util/global')

router.get(process.env.ROOT, async (req,res) => {
  const arrFiles  = await require('../../util/files')
  res.render('index', { img: arrFiles, title, arrUl1, arrUl2, arrUl3, infoS })
})

module.exports = router