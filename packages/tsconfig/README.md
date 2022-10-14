# @hiperative/tsconfig

A collection of different base `tsconfig.json` for Hiperative projects.

This project aims to reduce per-project configuration as much as possible. With
good defaults, we can focus on building, not configuration!

## Installation

```sh
npm install --save-dev @hiperative/tsconfig

# OR

yarn add --dev @hiperative/tsconfig
```

## Usage

After installing, update your project's `tsconfig.json` file with it:

```json
{
  "extends": "@hiperative/tsconfig"
  // your overrides here
}
```

Note that you'll have to provide a significant amount of project-specific
configuration options, including the `outDir` and `include` files.

## Contributing

Try to optimize for the fewest specified options between the config
specializations. For example, only `app` has `noEmit: true`, since the [default
value][compiler options], `false`, it's good for the `lib` config. Specifying it
only in the `app` config means fewer overall entries!

We want to keep maintenance low by only specifying what is necessary. If the
option's [default value][compiler options] is good for every config, remove it
from every config!

[compiler options]:
  https://www.typescriptlang.org/docs/handbook/compiler-options.html
