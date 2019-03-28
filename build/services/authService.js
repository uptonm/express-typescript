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
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const googleStrategy = passport_google_oauth20_1.default.Strategy;
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => {
    userSchema_1.default.findById(id).then((user) => done(null, user));
});
passport_1.default.use(new googleStrategy({
    clientID: process.env.GOOGLECLIENT,
    clientSecret: process.env.GOOGLESECRET,
    callbackURL: '/auth/google/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
    const existingUser = yield userSchema_1.default.findOne({
        email: profile.emails[0].value
    });
    if (existingUser) {
        // Check if user previously logged-in with another o-auth provider
        if (!existingUser.googleId) {
            existingUser.googleId = profile.id;
            yield existingUser.save();
        }
        return done(null, existingUser);
    }
    const user = yield new userSchema_1.default({
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        googleId: profile.id,
        email: profile.emails[0].value
    }).save();
    done(null, user);
})));
