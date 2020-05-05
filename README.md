# `dab`

- Create images in any color
- Convert image filetypes
- Resize images

## node usage

```bash
npm install @s9a/dab
```

```js
const dab = require("@s9a/dab")
```

```js
dab(deets, callback=dab.terse)
```

### `deets`

#### properties

- <b>`from`</b> is a filename <b>or</b> color format <b>or</b> named color
  - Default is `"#dab"`
  - Supports `png` `gif` `tif` `jpg` `webp` `svg`
- <b>`to`</b> is the filename to save to
  - Default is like `[from]_[shape].png`
  - Supports `png` `tif` `jpg` `webp`
- <b>`shape`</b> is desired dimensions in pixels
  - Supports [wtb formats](https://github.com/ryanve/wtb/blob/master/README.md)
  - Default is `960` aka `"960"` aka `"960x960"` aka `[960, 960]`

#### create png from color

```js
dab({
  from: "#bae",
  to: "bae.png",
  shape: "1280x640",
})
```

#### convert jpg to webp

```js
dab({
  from: "foto.jpg",
  to: "foto.webp",
  shape: "1280x640",
})
```

### `callback`

- `callback` may be custom or [preset](#callback-presets)
- `callback` defaults to `dab.terse`


```js
dab({})
```

```js
dab({}, dab.verbose)
```

```js
dab({}, (err, did) => {
  if (err) throw err
  console.log(did)
})
```

#### [callback presets](radio.js)

- `dab.verbose` verbose info
- `dab.terse` terse info
- `dab.quiet` only warnings or errors
- `dab.silent` nothing

## CLI

### syntax

- Deets can be in any order
- Supports hex colors and X11 names
- Dimension syntax is <code><var>width</var><b>x</b><var>height</var></code> or just `width` for square

### hexes

* Good: `"#000"` `\#000` `"black"` `black`
* Fails: `#000`

### flags

- `--help`
- `--silent`
- `--quiet`
- `--terse` default
- `--verbose`

### `node` `npm` `npx`

[<b>node installers</b>](https://nodejs.org/en/download/) provide `node` `npm` `npx`

versions are checkable via your command line

```bash
node -v
npm -v
npx -v
```

## CLI examples

- [temporary](#temporary)
- [project](#project)
- [clone](#clone)
- [global](#global)

### temporary

- `npx` lets you dab on the fly with the scoped package name `@s9a/dab`
- Easy way to try dab **without** saving the package

```bash
npx @s9a/dab "#dab" dab.png 1280
npx @s9a/dab "#dab" dab.png 1280x640
npx @s9a/dab "Lime" 1280
npx @s9a/dab "Lime" 1280x640
npx @s9a/dab "Lime" 1280x640 lime.png
```

### project

- You can save `@s9a/dab` as a project dependency
- Recommended when you want to dab in a project
- First create `package.json` via `npm init` or manually

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

### clone

- Cloning the repo is another way to dab
- This'll create a folder where you can dab

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

### global

- This is how to install `dab` as global command
- Recommended when you wanna dab anywhere and have access
- May need `--unsafe-perm` to build dependencies

```bash
npm install @s9a/dab --global #admin
sudo npm install @s9a/dab --global #user
```

```bash
dab "#dab" dab.png 1280
dab "#dab" dab.png 1280x640
dab "Lime" 1280
dab "Lime" 1280x640
dab "Lime" 1280x640 lime.png
```

#### uninstall whenever

```bash
npm uninstall @s9a/dab --global
```
