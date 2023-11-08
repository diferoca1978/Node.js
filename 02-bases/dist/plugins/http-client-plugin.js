"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = void 0;
const axios_1 = __importDefault(require("axios"));
//$ Addapter pattern (wrapper) of FetchAPI with http verbs
// const httpClientPlugin = {
//   get: async (url) => {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
//   },
//   post: async (url, body) => {},
//   put: async (url, body) => {},
//   delete: async (url) => {},
// };
//$ Addapter pattern (wrapper) with AXIOS third party module
exports.httpClientPlugin = {
    get: (url) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.get(url);
            return data;
        }
        catch (e) {
            console.log({ message: `have been an error ${e} ` });
        }
    }),
    post: (url, body) => __awaiter(void 0, void 0, void 0, function* () {
        return new Error('Method not implemented');
    }),
    put: (url, body) => __awaiter(void 0, void 0, void 0, function* () {
        return new Error('Method not implemented');
    }),
    delete: (url) => __awaiter(void 0, void 0, void 0, function* () {
        return new Error('Method not implemented');
    }),
};
