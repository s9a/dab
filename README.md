# `dabs`

Create PNG image in any color

## node usage

```bash
npm install dabs
```

```js
const dabs = require("dabs")
```

```js
dabs(deets, callback=saved)
```

### `deets`

```js
dabs({
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
dabs({}, (err, info) => {
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

### CLI examples

#### global

```bash
npm install dabs --global
```

```bash
dabs "#dab" dab.png 1280
dabs "#dab" dab.png 1280x640
dabs "Lime" 1280
dabs "Lime" 1280x640
dabs "Lime" 1280x640 lime.png
```

#### local

```bash
npm install dabs
```

```bash
npx dabs "#dab" dab.png 1280
npx dabs "#dab" dab.png 1280x640
npx dabs "Lime" 1280
npx dabs "Lime" 1280x640
npx dabs "Lime" 1280x640 lime.png
```

#### clone

```bash
git clone https://github.com/ryanve/dabs.git
cd dabs
npm install
npm test
```

```bash
npx . "#dab" dab.png 1280
npx . "#dab" dab.png 1280x640
npx . "Lime" 1280
npx . "Lime" 1280x640
npx . "Lime" 1280x640 lime.png
```
