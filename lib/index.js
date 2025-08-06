"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLocalServices = exports.COLLECTIONS = void 0;
const service_constant_json_1 = __importDefault(require("./service.constant.json"));
const collections_constant_1 = __importDefault(require("./collections.constant"));
exports.COLLECTIONS = collections_constant_1.default;
exports.default = service_constant_json_1.default;
const addLocalServices = (services) => {
    Object.assign(service_constant_json_1.default, services);
    console.log("added local services!");
};
exports.addLocalServices = addLocalServices;
