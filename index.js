const sharp = require("sharp")
const saved = file => (err, info) => {
  if (err) throw err
  console.log("Saved", file, info)
}

module.exports = ({
  fill = "",
  file = "",
  width = 0,
  height = 0,
  channels = 4,
}, callback) => {

  width = +width
  height = +height

  width = width || height && height || 1
  height = height || width && width || 1

  file = file || `${width}x${height}.png`
  fill = fill ? fill.toLowerCase() : "transparent"

  sharp({
    create: {
      background: fill,
      width,
      height,
      channels,
    }
  }).png()
    .toFile(file, callback || saved(file))
}
