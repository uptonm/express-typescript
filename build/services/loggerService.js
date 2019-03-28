"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
const loggerService = {
    info: (message) => {
        console.log(`[${colors_1.default.cyan('INFO')}] ${colors_1.default.grey.bold(new Date().toLocaleTimeString())} - ${colors_1.default.green(message)}`);
    },
    error: (message) => {
        console.log(`[${colors_1.default.red('ERROR')}] ${colors_1.default.grey.bold(new Date().toLocaleTimeString())} - ${colors_1.default.red(message)}`);
    }
};
exports.default = loggerService;
