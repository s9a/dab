const radio = require("./radio")
const wtb = require("wtb")
const path = require("path")
const trim = "".trim
const flag =/^-/
const fun = /^\w+\([\s\w%/,.+-]+\)$/
const x11 =/^[a-zA-Z]+$/
const hex = /^#\w+$/

module.exports = v => {
  let romeo
  let shape
  let files = []
  let fills = []
  let group = v => {
    if (v instanceof Array) return v.forEach(group)
    if (v instanceof Object || !v) return
    v = trim.call(v)
    if (hex.test(v)) return fills.push(v)
    let dot = path.extname(v)
    if (dot && !wtb(dot).area) return files.push(v)
    if (fun.test(v)) return fills.push(v)
    if (wtb(v).area) return shape = wtb(v)
    if (flag.test(v) && radio(v)) return romeo = v
    if (x11.test(v)) return fills.push(v)
  }
  group(v)
  let silent = radio(romeo) === radio.silent
  silent || v.length || (
    console.warn("Arguments void."),
    console.warn("Using defaults.")
  )
  let to = files.pop()
  let from = files.shift() || fills.shift()
  if (files.length) silent || console.warn("TMI", ...files)
  if (fills.length) silent || console.warn("TMI", ...fills)
  return { from, romeo, shape, to }
}
