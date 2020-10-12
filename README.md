# `website`

Portfolio website built in [Typescript](https://typescriptlang.org) using
[Next.js](https://nextjs.org) and [AMP](https://amp.dev).

#### Languages

- [Typescript](https://www.typescriptlang.org) - As my language of choice
  (mostly for static typing, stronger linting capabilities, and the potential
  for beautifully detailed--and completely automatically generated--
  documentation). Typescript is also [well supported by
  Next.js](https://nextjs.org/docs/basic-features/typescript) and
  [React](https://reactjs.org/docs/static-type-checking.html#typescript).
- [Sass](https://sass-lang.com) - For styling components (i.e. CSS on steroids).
  Sass, like Typescript, is also [well supported by Next.js
  out-of-box.](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)

#### Frameworks

- [React](https://reactjs.org) - As my front-end framework.
- [Next.js](https://nextjs.org) - To easily support
  [SSR](https://nextjs.org/docs/basic-features/pages#server-side-rendering) and
  other performance [PWA](https://web.dev/progressive-web-apps/) features.

#### Tooling

- [Yarn](https://yarnpkg.com) - To manage dependencies much faster than NPM (and
  for better community support, advanced features, etc).
- [ESLint](https://github.com/eslint/eslint) - For code linting to avoid
  common mistakes and to enforce styling. Follow [these
  instructions](https://eslint.org/docs/user-guide/integrations) to install it
  in the text editor of your choice (such that you won't have to wait until my
  pre-commit hooks fail to update your code).
- [Cypress](https://docs.cypress.io) for integration, UI, and some unit tests.
  Cypress is like Selenium; but built from the ground-up with the developer in
  mind. Cypress runs alongside your code in the browser, enabling DOM snapshots,
  time travel, and overall faster test runs.

## Development Environment

To setup a development environment for this portfolio website (e.g. to fork it
for your own uses):

1. Follow [these instructions](https://github.com/nvm-sh/nvm#installing-and-updating)
   to install `nvm` (my suggested way to use Node.js) on your
   machine. Verify that `nvm` is installed by running:

```
$ command -v nvm
```

2. (Optional) If you use [Vim](https://vim.org) as your preferred text editor,
   follow [these instructions](https://freshman.tech/vim-javascript) on setting
   up [Vim](https://vim.org) for editing JavaScript.
3. Run the following command to install Node.js v12.18.3 (my current version):

```
$ nvm i 12.18.3
```

4. (Optional) Run the following command to set Node.js v12.18.3 as your default
   Node.js version (useful if you have multiple Node.js versions installed and
   don't want to have to remember to switch to v12.18.3):

```
$ nvm alias default 12.18.3
```

5. Ensure that you have recent versions of Node.js and it's package manager
   `npm` by running:

```
$ node -v
12.18.3
$ npm -v
6.14.7
```

6. (Optional) Install the [Cypress system dependencies](https://bit.ly/2QHuAiG)
   if you plan on running my integration tests locally.

```
$ sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

7. Clone and `cd` into this repository locally by running:

```
$ git clone https://github.com/nicholaschiang/website.git && cd website/
```

8. Follow [these instructions](https://yarnpkg.com/getting-started/install) to
   install `yarn` (my dependency manager for a number of reasons):

```
$ npm i -g yarn
```

9. Then, install of my project's dependencies with the following command:

```
$ yarn
```

10. Follow the instructions included below (see "Available Scripts") to start a
    [Next.js](https://nextjs.org) development server (to see your updates affect
    the app live):

```
$ yarn dev
```

## Available Scripts

All of the below scripts come directly from
[Next.js](https://nextjs.org/docs/getting-started). In the project directory,
you can run:

#### `yarn dev`

Runs `next dev` which starts a development server at
[http://localhost:3000](http://localhost:3000).

#### `yarn build`

Runs `next build` which builds the application for production usage.

#### `yarn analyze`

Runs the build to generate a bundle size visualizer.

#### `yarn lint`

Runs all of ESLint tests. This should rarely be necessary because you should
have ESLint integrated into your IDE (and thus it should run as you edit code)
and I have Husky running `pretty-quick` before each commit (which should take
care of the styling that ESLint enforces).

#### `yarn style`

Runs my code styling Husky pre-commit hook. TB uses
[Prettier](https://prettier.io) to enforce consistent code formatting throughout
the codebase.

A pre-commit hook is used to format changed files found on commit, however it is
still recommended to install the Prettier plugin in your code editor to ensure
consistent code style.
