const silent = () => {}
const quiet = err => {
  if (err) throw err
}

const terse = (err, did) => {
  if (err) throw err
  let { bytes, shape, to } = did
  bytes += "B"
  console.info("Saved", to, shape, bytes)
}

const verbose = (err, did) => {
  if (err) throw err
  let { to } = did
  console.info("Saved", to, did)
}

const help = () => {
  console.info("https://github.com/s9a/dab#cli")
}

const romeo = Object.create(null)
const radio = flag => flag ? romeo[flag.replace(/-/g, "")] : void flag
radio.help = help
radio.silent = silent
radio.quiet = quiet
radio.terse = terse
radio.verbose = verbose
Object.assign(romeo, radio)
module.exports = radio
