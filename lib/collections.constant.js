"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tenant_collection_1 = __importDefault(require("./collections/tenant.collection"));
const COLLECTIONS = Object.assign({}, tenant_collection_1.default);
exports.default = COLLECTIONS;
