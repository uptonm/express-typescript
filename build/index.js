"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
const loggerService_1 = __importDefault(require("./services/loggerService"));
mongoose_1.default.connect(process.env.DB_URI || 'mongodb://localhost:27017/express-typescript', {
    useNewUrlParser: true,
    useCreateIndex: true
}, err => {
    if (err) {
        return loggerService_1.default.error(err.message);
    }
    loggerService_1.default.info(`Connected to MongoDB on port ${colors_1.default.blue(27017 + '')} 👌`);
});
app_1.default.listen(process.env.PORT || 8000, () => {
    loggerService_1.default.info(`App is now listening on port ${colors_1.default.blue(process.env.PORT || 8000 + '')} 🚀`);
});
