#!/usr/bin/env node

const dabPng = require("./")
const wtf = require("./wtf")
const vector = process.argv

const understood = wtf(vector.slice(2))

dabPng(understood)
