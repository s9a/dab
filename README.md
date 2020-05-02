# `dab`

Create PNG image in any color

## node usage

```bash
npm install @s9a/dab
```

```js
const dab = require("@s9a/dab")
```

```js
dab(deets, callback=saved)
```

### `deets`

```js
dab({
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
dab({}, (err, info) => {
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
npm install @s9a/dab --global
```

```bash
dab "#dab" dab.png 1280
dab "#dab" dab.png 1280x640
dab "Lime" 1280
dab "Lime" 1280x640
dab "Lime" 1280x640 lime.png
```

#### local

```bash
npm install @s9a/dab
```

```bash
npx dab "#dab" dab.png 1280
npx dab "#dab" dab.png 1280x640
npx dab "Lime" 1280
npx dab "Lime" 1280x640
npx dab "Lime" 1280x640 lime.png
```

#### clone

```bash
git clone git@github.com:s9a/dab.git #team
git clone https://github.com/s9a/dab.git #guest
cd dab
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
