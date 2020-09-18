---
lang: en
title: 'Debugging with VS Code'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, Debug
sidebar: lb4_sidebar
permalink: /doc/en/lb4/Debugging-with-vscode.html
---

LoopBack team develops with editor Visual Studio Code in which we defined some
tasks to help people debug their projects.

### Debugging Packages

The monorepo `loopback-next` contains a folder `.vscode` at root level for
debugging the test files. When start debugging, it will stop at any breakpoint
triggered by the tests. There are two predefined configurations defined in file
`.vscode/launch.json`:

- Run Mocha tests: Debug all tests inside the `/packages` folder.
- Debug Current Test File: Only debug the tests inside the current open file.

### Debugging Examples

Each example repository under `loopback-next/examples` contains a default
"Launch Program" task for debugging. It runs the application and stops at any
breakpoint triggered by the start action and the following requests. The task is
defined inside the `.vscode` folder.

### Debugging with Mocha Options

To target on a single test case or test suite, you can use the `only` method as
`describe.only()` or `it.only()`. The usage is well documented in
[mocha exclusive tests](https://mochajs.org/#exclusive-tests).

Another approach without modifying the code is to run `npm test` with filter
option `-g`. You can apply a filer on the names of tests. More usage and
examples can be found in page
[mocha - option grep](https://mochajs.org/#-grep-regexp-g-regexp).
