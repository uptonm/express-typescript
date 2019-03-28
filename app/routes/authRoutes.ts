import passport from 'passport';
import express from 'express';

const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req: express.Request, res: express.Response) => {
    res.redirect('/'); // User logs in, send them to the dashboard
  }
);
router.get('/auth/current_user', (req: express.Request, res: express.Response) => {
  if (req.user) {
    // Does user exist?/ are they logged in?
    res.send(req.user);
  } else {
    res.send({ status: 'logged-out' });
  }
});
router.get('/auth/logout', (req: express.Request, res: express.Response) => {
  req.logout();
  res.redirect('/'); // User logs out, bring them back to the home page
});

export default router;
