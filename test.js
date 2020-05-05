const dab = require("./")
const wtf = require("./wtf")
const fs = require("fs")
const test = require("tape")
const cleanup = []
const radio = require("./radio")
const waves = Object.keys(radio)

test("keys", t => {
  t.plan(2)
  t.ok(waves.length)
  t.ok(waves.length <= Object.keys(dab).length)
})

test("radio", t => {
  const { silent, quiet, terse, verbose } = radio
  const err = new Error
  t.plan(9)
  t.ok(radio("--help").name === "help")
  t.ok(radio("--silent").name === "silent")
  t.ok(radio("--quiet").name === "quiet")
  t.ok(radio("--terse").name === "terse")
  t.ok(radio("--verbose").name === "verbose")
  t.doesNotThrow(silent.bind(radio, err))
  t.throws(quiet.bind(radio, err))
  t.throws(terse.bind(radio, err))
  t.throws(verbose.bind(radio, err))
})

test("defaults", t => {
  const from = "#dab"
  const to = "test_defaults.png"
  t.plan(5)
  dab({ from, to }, (err, info) => {
    if (err) throw err
    t.ok(info)
    t.ok(fs.existsSync(to))
    t.ok(info.to === to)
    t.ok(info.width === 960)
    t.ok(info.height === 960)
    cleanup.push(to)
  })
})

test("portrait", t => {
  const from = "#bae"
  const to = "test_landscape.png"
  const width = 600
  const height = 900
  t.plan(5)
  dab({ from, to, shape: "600x900" }, (err, info) => {
    if (err) throw err
    t.ok(info)
    t.ok(fs.existsSync(to))
    t.ok(info.to === to)
    t.ok(info.width === width)
    t.ok(info.height === height)
    cleanup.push(to)
  })
})

test("autoheight", t => {
  const from = "#bff"
  const to = "autoheight.png"
  const width = 500
  t.plan(5)
  dab({ from, to, shape: width }, (err, info) => {
    if (err) throw err
    t.ok(info)
    t.ok(fs.existsSync(to))
    t.ok(info.to === to)
    t.ok(info.width === width)
    t.ok(info.height === width)
    cleanup.push(to)
  })
})

test("autowidth", t => {
  const from = "#bed"
  const to = "test_autowidth.png"
  const height = 500
  t.plan(5)
  dab({ from, to, shape: height }, (err, info) => {
    if (err) throw err
    t.ok(info)
    t.ok(fs.existsSync(to))
    t.ok(info.to === to)
    t.ok(info.width === height)
    t.ok(info.height === height)
    cleanup.push(to)
  })
})

test("wtf", t => {
  t.plan(12)
  t.ok(wtf("#333").from === "#333")
  t.ok(wtf(["#333", "333.png", "555"]).from === "#333")
  t.ok(wtf(["#333", "333.png", "555"]).to === "333.png")
  t.ok(wtf(["#333", "333.png", "555"]).shape.width === 555)
  t.ok(wtf(["#333", "333.png", "555x888"]).shape.height === 888)
  t.ok(wtf(["#333", "333.png", "555X888"]).shape.height === 888)
  t.ok(wtf(["any.png"]).to === "any.png")
  t.ok(wtf(["was.png", "any.png", 555]).to === "any.png")
  t.ok(wtf(["was.png", "any.png", 555]).from === "was.png")
  t.ok(wtf(["was.png", "any.png", 555]).shape.height === 555)
  t.ok(wtf(["was.png", "tmi.png", "any.png", "--silent"]).from === "was.png")
  t.ok(wtf(["was.png", "tmi.png", "any.png", "--silent"]).to === "any.png")
})

test.onFinish(() => {
  cleanup.forEach(to => fs.unlinkSync(to))
})
