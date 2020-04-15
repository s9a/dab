# `dab-png`

## install

```bash
npm install dab-png --save
```

## usage

```js
const dabPng = require("dab-png")
```

```js
dabPng(deets, callback=saved)
```

### `deets`

```js
dabPng({
  fill: "#bae",
  file = "bae.png",
  width = 1600,
  height = 900,
})
```

- `fill` with any recognizable color format. Default: `"transparent"`
- `width` in pixels. Default: `height || 1`
- `height` in pixels. Default: `width || 1`
- `file` is the filename or filepath to save to. Default: <code><var>width</var><b>x</b><var>height</var><b>.png</b></code>

### `callback`

- default `callback` logs success or throws error
- you may override with your own `callback`

```js
dabPng({}, (err, info) => {
  if (err) throw err
  console.log(info)
})
```

## CLI

- Deets can be in any order
- Supports hex colors and X11 names
- Dimension syntax is <code><var>width</var><b>x</b><var>height</var></code> or just `width` for square
- Quote or escape as needed
  * Good: `"#000"` `\#000` `"black"` `black`
  * Fails: `#000`


### cli examples

```
dab-png "#dab" dab.png 1280
dab-png "#dab" dab.png 1280x640
dab-png "Lime" 1280
dab-png "Lime" 1280x640
dab-png "Lime" 1280x640 lime.png
```
