"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proxy6Client = void 0;
const axios_1 = __importDefault(require("axios"));
const querystring_1 = __importDefault(require("querystring"));
class Proxy6Client {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async _call(method, data) {
        const response = await axios_1.default.get(this.constructor.BASE_URL + '/' + this.apiKey + '/' + method + (Object.keys(data).length ? '?' + querystring_1.default.stringify(data) : ''), {
            responseType: 'json'
        });
        return response.data;
    }
    static fromEnv() {
        return new this(process.env.PROXY6_API_KEY);
    }
    static getVersion(s) {
        return {
            'ipv4 shared': 4,
            ipv4: 3,
            ipv6: 6
        }[s.toLowerCase()] || s && Number(s);
    }
    async getprice(o) {
        return await this._call('getprice', o);
    }
    async getcount(o) {
        return await this._call('getcount', o);
    }
    async getcountry(o) {
        return await this._call('getcountry', o);
    }
    async getproxy(o) {
        return await this._call('getproxy', o);
    }
    async settype(o) {
        return await this._call('settype', o);
    }
    async setdescr(o) {
        return await this._call('setdescr', o);
    }
    async buy(o) {
        return await this._call('buy', o);
    }
    async prolong(o) {
        return await this._call('prolong', o);
    }
    async delete(o) {
        return await this._call("delete", o);
    }
    async check(o) {
        return await this._call("check", o);
    }
}
exports.Proxy6Client = Proxy6Client;
Proxy6Client.BASE_URL = "https://proxy6.net/api";
//# sourceMappingURL=proxy6.js.map