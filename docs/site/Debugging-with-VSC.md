---
lang: en
title: 'Debugging with VS Code'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, Debug
sidebar: lb4_sidebar
permalink: /doc/en/lb4/Debugging-with-vsc.html
---

LoopBack team develops with editor Visual Studio Code in which we defined some
tasks to help people debug their projects.

### Debugging Packages

The monorepo `loopback-next` contains a folder `.vscode` at root level for
debugging the test files. When start debugging, it will stop at any breakpoint
triggered by the tests. There are two tasks defined now:

- Run Mocha tests: Debug all tests inside the `/packages` folder.
- Debug Current Test File: Only debug the tests inside the current open file.

### Debugging Examples

Each example repository under `loopback-next/examples` contains a default
"Launch Program" task for debugging. It runs the application and stops at any
breakpoint triggered by the start action and the following requests. The task is
defined inside the `.vscode` folder.
