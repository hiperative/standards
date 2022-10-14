# @hiperative/eslint-config

Hiperative's base ESLint config.

## Installation

```sh
npm install --save-dev eslint @hiperative/eslint-config

# OR

yarn add --dev eslint @hiperative/eslint-config
```

## Usage

After installing, update your project's `.eslintrc` file to import the rule sets
you want:

```json
{
  "extends": ["@hiperative/eslint-config"]
}
```

### TypeScript support

You can also enable by installing `typescript` and using as:

```json
{
  "extends": ["@hiperative/eslint-config/typescript"]
}
```

---

Read the
[ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
