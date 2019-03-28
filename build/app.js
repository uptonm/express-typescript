"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
require('./services/authService');
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(cookie_session_1.default({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIEKEY || 'lsajkndlsakndlaskndlaskndlaskndl11112134124sadas']
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(morgan_1.default('tiny'));
app.use(cors_1.default());
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
app.use('/api', userRoutes_1.default);
app.use(authRoutes_1.default);
exports.default = app;
