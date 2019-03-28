"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/auth/google', passport_1.default.authenticate('google', {
    scope: ['profile', 'email']
}));
router.get('/auth/google/callback', passport_1.default.authenticate('google'), (req, res) => {
    res.redirect('/'); // User logs in, send them to the dashboard
});
router.get('/auth/current_user', (req, res) => {
    if (req.user) {
        // Does user exist?/ are they logged in?
        res.send(req.user);
    }
    else {
        res.send({ status: 'logged-out' });
    }
});
router.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/'); // User logs out, bring them back to the home page
});
exports.default = router;
