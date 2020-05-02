#!/usr/bin/env node

const dab = require("./")
const wtf = require("./wtf")
const vector = process.argv

const understood = wtf(vector.slice(2))

dab(understood)
