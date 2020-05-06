const radio = require("./radio")
const wtb = require("wtb")
const trim = "".trim
const flag = /^--?[a-z]+$/i
const fun = /^[a-z]+[(][\s\w,.%*+/-]+[)]$/i
const x11 =/^[a-z]+$/i
const hex = /^#[\da-f]+$/i
const int = /^\d+$/
const dot = /[.]\w+$/
const nan = n => +n != +n
const af = /^([a-f]{3,4}|[a-f]{6}|[a-f]{8})$/i

module.exports = v => {
  let romeo
  let files = []
  let fills = []
  let numms = []
  let group = v => {
    if (v instanceof Array) return v.forEach(group)
    if (v instanceof Object || !v) return
    v = trim.call(v)
    if (int.test(v)) return numms.push(v)
    if (hex.test(v)) return fills.push(v)
    if (dot.test(v) && nan(v)) return files.push(v)
    if (fun.test(v)) return fills.push(v)
    if (flag.test(v)) return romeo = v
    if (+v) return numms.push(+v)
    if (af.test(v)) return fills.push("#" + v)
    if (x11.test(v)) return fills.push(v)
    if (wtb(v).area) return numms.push(v)
  }
  group(v)
  let silent = radio(romeo) === radio.silent
  silent || v.length || (
    console.warn("Arguments void."),
    console.warn("Using defaults.")
  )
  let shape = numms.length ? wtb(numms.pop()) : null
  let to = files.pop()
  let from = files.shift() || fills.shift()
  if (files.length) silent || console.warn("TMI", ...files)
  if (fills.length) silent || console.warn("TMI", ...fills)
  return { from, romeo, shape, to }
}
