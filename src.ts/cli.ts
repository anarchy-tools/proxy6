import { Proxy6Client } from "./proxy6";

import yargs from 'yargs';
import util from 'util';

export async function runCLI() {
  const options = Object.assign({}, yargs.options);
  const arg = options._[0];
  delete options._;
  const client = Proxy6Client.fromEnv();
  console.log(util.inspect(await client._call(arg, Object.entries(options).reduce((r, [key, value]) => {
    r[changecase.snakeCase(key)] = value;
    return r;
  }, {})), {
    colors: true,
    depth: 5
  }));
}
