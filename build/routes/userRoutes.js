"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const router = express_1.default.Router();
router.get('/users/:id', userController_1.default.getUser);
router.post('/users', userController_1.default.postUser);
router.put('/users/:id', userController_1.default.putUser);
router.delete('/users/:id', userController_1.default.deleteUser);
exports.default = router;
