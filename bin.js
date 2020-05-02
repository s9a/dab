#!/usr/bin/env node

const dabz = require("./")
const wtf = require("./wtf")
const vector = process.argv

const understood = wtf(vector.slice(2))

dabz(understood)
