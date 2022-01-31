#TSED esm issue

Run `yarn install && yarn dev` to get the following error:

```
import { Configuration, Inject } from "@tsed/di";
         ^^^^^^^^^^^^^
SyntaxError: Named export 'Configuration' not found. The requested module '@tsed/di' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from '@tsed/di';
const { Configuration, Inject } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:127:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:191:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:331:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)
```
