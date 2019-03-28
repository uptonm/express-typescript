"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = __importDefault(require("../models/userSchema"));
const userController = {
    getUser: (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.params.id) {
            return res.status(400).send({
                Error: 'Required field id was not included'
            });
        }
        const exists = yield userSchema_1.default.findById(req.params.id);
        if (exists) {
            res.status(200).send(exists);
        }
        else {
            res.status(404).send({
                Error: 'User not found'
            });
        }
    }),
    postUser: (req, res) => __awaiter(this, void 0, void 0, function* () {
        let user = yield userSchema_1.default.create(req.body).catch(err => {
            return res.status(200).send({
                Error: err
            });
        });
        return res.status(200).send(user);
    }),
    putUser: (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.params.id) {
            res.status(400).send({
                Error: 'Required field id was not included'
            });
        }
        let exists = yield userSchema_1.default.findById(req.params.id);
        if (exists) {
            yield userSchema_1.default.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).send({
                userId: req.params.id,
                update: req.body
            });
        }
    }),
    deleteUser: (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.params.id) {
            res.status(400).send({
                Error: 'Required field id was not included'
            });
        }
        let exists = yield userSchema_1.default.findById(req.params.id);
        if (exists) {
            yield userSchema_1.default.findByIdAndDelete(req.params.id);
            res.status(200).send(`User ${req.params.id} deleted`);
        }
    })
};
exports.default = userController;
