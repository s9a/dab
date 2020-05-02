const dab = require("./")
const wtf = require("./wtf")
const fs = require("fs")
const test = require("tape")
const cleanup = []

test("ufo", t => {
  t.plan(1)
  t.throws(() => dab())
})

test("defaults", t => {
  const fill = "#dab"
  const file = "test_defaults.png"
  t.plan(5)
  dab({ fill, file }, (err, info) => {
    if (err) throw err
    t.ok(info)
    t.equal(fs.existsSync(file), true)
    t.equal(info.format, "png")
    t.equal(info.width, 1)
    t.equal(info.height, 1)
    cleanup.push(file)
  })
})

test("portrait", t => {
  const fill = "#bae"
  const file = "test_landscape.png"
  const width = 600
  const height = 900
  t.plan(5)
  dab({ fill, file, width, height }, (err, info) => {
    if (err) throw err
    t.ok(info)
    t.equal(fs.existsSync(file), true)
    t.equal(info.format, "png")
    t.equal(info.width, width)
    t.equal(info.height, height)
    cleanup.push(file)
  })
})

test("autoheight", t => {
  const fill = "#bff"
  const file = "autoheight.png"
  const width = 500
  t.plan(5)
  dab({ fill, file, width }, (err, info) => {
    if (err) throw err
    t.ok(info)
    t.equal(fs.existsSync(file), true)
    t.equal(info.format, "png")
    t.equal(info.width, width)
    t.equal(info.height, width)
    cleanup.push(file)
  })
})

test("autowidth", t => {
  const fill = "#bed"
  const file = "test_autowidth.png"
  const height = 500
  t.plan(5)
  dab({ fill, file, height }, (err, info) => {
    if (err) throw err
    t.ok(info)
    t.equal(fs.existsSync(file), true)
    t.equal(info.format, "png")
    t.equal(info.width, height)
    t.equal(info.height, height)
    cleanup.push(file)
  })
})

test("wtf", t => {
  const empty = {}
  const empties = ["", [], {}, null, undefined]

  t.plan(empties.length + 4)
  empties.forEach(v => t.deepEqual(wtf(v), empty))

  t.deepEqual(wtf("#333"), { fill: "#333" })
  t.deepEqual(wtf("333"), { width: 333, height: 333 })
  t.deepEqual(wtf("any.png"), { file: "any.png" })
  t.deepEqual(wtf("80x20"), { width: 80, height: 20 })
})

test.onFinish(() => {
  cleanup.forEach(file => fs.unlinkSync(file))
})
