"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLocalServices = exports.COLLECTIONS = void 0;
const service_constant_json_1 = __importDefault(require("./service.constant.json"));
exports.default = service_constant_json_1.default;
var collections_constant_1 = require("./collections.constant");
Object.defineProperty(exports, "COLLECTIONS", { enumerable: true, get: function () { return __importDefault(collections_constant_1).default; } });
const addLocalServices = (services) => {
    Object.assign(service_constant_json_1.default, services);
    console.log("added local services!");
};
exports.addLocalServices = addLocalServices;
