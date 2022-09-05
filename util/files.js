require('dotenv').config()

const { promises: fs } = require('fs')
const img_dir          = process.env.IMG
const arrFiles         = { "svg": [], "png_jpg": [] }

const getFiles = async (dir) => {
  const files = await fs.readdir(dir)
  files.map((item) => {
    let a = item.split('.')
    let b = a[1]
    b === "svg" ? arrFiles.svg.push(item) : arrFiles.png_jpg.push(item)
  })
  return arrFiles
}

const expFiles = getFiles(img_dir)
module.exports = expFiles