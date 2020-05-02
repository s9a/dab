#!/usr/bin/env node

const dabs = require("./")
const wtf = require("./wtf")
const vector = process.argv

const understood = wtf(vector.slice(2))

dabs(understood)
