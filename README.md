#TSED esm issue

Run `yarn install && yarn dev` to get the following error:

```
Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/node_modules/file-type/index.js from /Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/src/controller/ExampleController.ts not supported.
Instead change the require of index.js in /Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/src/controller/ExampleController.ts to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/src/controller/ExampleController.ts:15:21)
    at Module.m._compile (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/node_modules/ts-node/dist/index.js:735:29)
    at Object.require.extensions.<computed> [as .ts] (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/node_modules/ts-node/dist/index.js:737:16)
    at Object.<anonymous> (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/src/server.ts:16:29)
    at Module.m._compile (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/node_modules/ts-node/dist/index.js:735:29)
    at Object.require.extensions.<computed> [as .ts] (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/node_modules/ts-node/dist/index.js:737:16)
    at Object.<anonymous> (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/src/index.ts:5:18)
    at Module.m._compile (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/node_modules/ts-node/dist/index.js:735:29)
    at Object.require.extensions.<computed> [as .ts] (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/node_modules/ts-node/dist/index.js:737:16)
    at main (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/node_modules/ts-node/dist/bin.js:238:16)
    at Object.<anonymous> (/Users/digitalenterprises/Sites/edwinveldhuizen/tsed-example/node_modules/ts-node/dist/bin.js:351:5) {
  code: 'ERR_REQUIRE_ESM'
}

```
