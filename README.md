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
  file: "bae.png",
  width: 1600,
  height: 900,
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

### syntax

- Deets can be in any order
- Supports hex colors and X11 names
- Dimension syntax is <code><var>width</var><b>x</b><var>height</var></code> or just `width` for square

### hexes

* Good: `"#000"` `\#000` `"black"` `black`
* Fails: `#000`

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
