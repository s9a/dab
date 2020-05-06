const wtb = require("wtb")
const path = require("path")
const sane = require("./sane")
const sharp = require("sharp")
const radio = require("./radio")
const terse = radio.terse

function dab({ from, romeo, shape, to }, callback) {

  callback = callback || radio(romeo) || terse
  let fill = !from || !path.extname(from)
  from = from || "#dab"
  shape = shape || 960
  let box = wtb(shape)
  let width = box.width
  let height = box.height
  let resize = { width, height }
  to = to || (fill
    ? sane(from)
    : path.basename(from, path.extname(from))
  ) + `_${width}x${height}.png`

  let work = fill ? {
    create: {
      background: from,
      channels: 4,
      height, width
    }
  } : from

  work = sharp(work)
  fill || work.resize(resize)

  work.toFile(to, (err, did) => {
    if (err) callback(err)
    let { channels, height, width, size } = did
    let { area, aspect } = wtb(did)
    let shape = `${width}x${height}`
    let bytes = size
    callback(err, {
      area,
      aspect,
      bytes,
      channels,
      from,
      height,
      shape,
      to,
      width
    })
  })
}

Object.assign(dab, radio)
module.exports = dab
