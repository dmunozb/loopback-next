---
lang: en
title: 'Troubleshooting'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, Debug
sidebar: lb4_sidebar
permalink: /doc/en/lb4/Troubleshooting.html
---

In general, when you are developing an application, use the `npm` command to run
it. This enables you to see stack traces and console output immediately.

For example:

```
$ cd myapp
$ npm start
```

LoopBack 4 also provides multiple ways to help you verify or diagnose the app.

## Setting Debug Strings

If you get an error but it doesn't provide enough information, you can turn on
debug mode. That is, instead of starting the application using `npm start`, use
the following command:

```sh
DEBUG=loopback:* npm start
```

This command prints out all the debug information from LoopBack framework. To
only show a certain area's information, you can use more specific strings, see
page [Setting debug strings](Setting-debug-strings.md) for details.

## Running VS Code Tasks

LoopBack team develops with editor Visual Studio Code in which we defined some
tasks to help people debug their projects. Each package in the monorepo contains
a `.vscode` folder for those tasks, see page
[Debugging with VS Code](Debugging-with-vscode.md) for details.

## Resolving Binding Error

With high extensibility, a LoopBack application usually contains tens of
bindings. A common error caused by missing bindings is "a binding key not
bound", for example:

```
500 Error: The key 'services.hasher' is not bound to any value in context application
```

To fix it, you should set the value for the binding key in the application.

For example, go to your application, typically it is in `src/application.ts`
file:

```ts
import {Hasher} from '/services/hasher';

export class TodoListApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);
    // Add your binding here
    this.bind(services.hasher).toClass(Hasher);
  }
}
```

See more details in
[Binding documentation page](https://loopback.io/doc/en/lb4/Binding.html).

## Updating Compiled Files

The TypeScript application is compiled to JavaScript files and runs. Therefore
forgetting to rebuild the updated TS files could run into errors.

For example, people deleted a Controller file but running `npm start` still
keeps complaining about it. This error implies the compiled JS files probably
didn't get updated.

To fix it, run `npm run clean` to delete all the compiled files. By doing so, it
forces the build to generate the compiled JS files next time when you start the
application using `npm start` or call `npm run build`.

## Leveraging Sandbox

The `/sandbox` directory in the `loopback-next` monorepo can be used to utilize
the source code as symbolically-linked dependencies. See its
[README](https://github.com/strongloop/loopback-next/tree/master/sandbox) for
usage instructions.
