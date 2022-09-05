require('dotenv').config()
require('./controllers/app')()

const port    = process.env.PORT
const url     = process.env.URL

async function init() {
  await app().listen(port, () => {
    console.log(`Server running on ${url+port}`)
  })
}

init()