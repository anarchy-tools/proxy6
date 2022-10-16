import { Proxy6Client } from "./proxy6";

import { snakeCase } from "change-case";
import yargs from "yargs";
import util from "util";

export async function runCLI() {
  const options = Object.assign({}, yargs.options);
  if (options.h | options.help) {
    console.log('usage: proxy6 <command> [options]');
  } else {
    const arg = options._[0];
    delete options._;
    const client = Proxy6Client.fromEnv();
    console.log(util.inspect(await client._call(arg, Object.entries(options).reduce((r, [key, value]) => {
      r[snakeCase(key)] = value;
      return r;
    }, {})), {
      colors: true,
      depth: 5
    }));
  }
}
