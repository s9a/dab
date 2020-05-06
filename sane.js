const trim = "".trim
const hash = /#/g
const safe = /[\w.+-]+/g
const sane = v => {
  return (
    trim.call(v)
      .replace(hash, "")
      .match(safe) || []
    ).join("_")
}

module.exports = sane
