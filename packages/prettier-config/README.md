# @hiperative/prettier-config

Hiperative's base Prettier config.

## Installation

```sh
yarn add --dev @hiperative/prettier-config
```

## Usage

If you don't plan on changing the config at all, the easiest way to install is
to use the
[`prettier` parameter](https://prettier.io/docs/en/configuration.html#sharing-configurations)
in package.json:

```json
{
  "name": "your-awesome-app",
  "prettier": "@hiperative/prettier-config"
}
```

If you need to extend or change the config, you can update your project's `prettier.config.js` file to import the rule sets you want:

```js
module.exports = {
  ...require("@hiperative/prettier-config"),
  // your overrides here
};
```

---

Read the [Prettier config docs](https://prettier.io) for more information.
