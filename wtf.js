const png = /\.png$/i
const dimension = /^[0-9xX]+$/
const x11 =/^[a-zA-Z]+$/
const hex = /^#\w+$/
const isColor = v => hex.test(v) || x11.test(v)
const batch = a => Object.assign({}, ...a.map(wtf))

const wtf = module.exports = v => {
  if (v == null) return {}
  if (Array.isArray(v)) return batch(v)
  v = String(v)
  if (png.test(v)) return { file: v }
  if (isColor(v)) return { fill: v }
  if (dimension.test(v)) {
    let area = v.toLowerCase().split("x")
    let width = +area[0]
    let height = +area[1]
    width = width || height || 1
    height = height || width || 1
    return { width, height }
  }
  return {}
}
