"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCLI = void 0;
const proxy6_1 = require("./proxy6");
const change_case_1 = require("change-case");
const yargs_1 = __importDefault(require("yargs"));
const util_1 = __importDefault(require("util"));
async function runCLI() {
    const options = Object.assign({}, yargs_1.default.options);
    if (options.h | options.help) {
        console.log('usage: proxy6 <command> [options]');
    }
    else {
        const arg = options._[0];
        delete options._;
        const client = proxy6_1.Proxy6Client.fromEnv();
        console.log(util_1.default.inspect(await client._call(arg, Object.entries(options).reduce((r, [key, value]) => {
            r[(0, change_case_1.snakeCase)(key)] = value;
            return r;
        }, {})), {
            colors: true,
            depth: 5
        }));
    }
}
exports.runCLI = runCLI;
//# sourceMappingURL=cli.js.map