#!/usr/bin/env node

const dab = require("./")
const wtf = require("./wtf")
const radio = require("./radio")
const vector = process.argv.slice(2)
const help = v => radio(v) === radio.help

vector.some(help)
  ? radio.help()
  : dab(wtf(vector))
