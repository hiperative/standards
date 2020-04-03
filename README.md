# Hiperative's JavaScript Product Conventions

A monorepo of all configs and CLI wrappers used to speed up development at
Hiperative's apps.

## Hiperative shared configurations

The other projects in this repo are shared configurations for common tools we
use for building, linting, and formatting our code. They can be installed
separately and used by anyone should they opt to follow our standards.

- [@hiperative/eslint-config](./packages/eslint-config)
- [@hiperative/prettier-config](./packages/prettier-config)
- [@hiperative/tsconfig](./packages/tsconfig)

### Related projects we use

- [TypeScript](https://www.typescriptlang.org/): a superset of JavaScript which
  we think helps make code readable and less bug-prone.
- [ESLint](https://eslint.org/): used for static code analysis with some
  auto-fixing.
- [Prettier](https://prettier.io/): use to format code pre-commit and
  automatically in your editor.
- [Jest](https://jestjs.io/): our preferred JavaScript test framework.
- [husky](https://github.com/typicode/husky): allows us to hook into git events
  in a convenient way.
- [lint-staged](https://github.com/okonet/lint-staged): allows us to write
  pre-commit hooks which target specific paths and run a series of commands.
