import passport from 'passport';
import googleOauth from 'passport-google-oauth20';
import spotifyOauth from 'passport-spotify';
import User from '../models/userSchema';

const googleStrategy = googleOauth.Strategy;
const spotifyStrategy = spotifyOauth.Strategy;

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user: any) => done(null, user));
});

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLECLIENT,
      clientSecret: process.env.GOOGLESECRET,
      callbackURL: '/auth/google/callback', // This is the route the user takes after OAuth from Google
      proxy: true
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      const existingUser: any = await User.findOne({
        email: profile.emails[0].value
      });
      if (existingUser) {
        // Check if user previously logged-in with another o-auth provider
        if (!existingUser.googleId) {
          existingUser.googleId = profile.id;
          await existingUser.save();
        }
        return done(null, existingUser);
      }
      const user = await new User({
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        googleId: profile.id,
        email: profile.emails[0].value
      }).save();

      done(null, user);
    }
  )
);

passport.use(
  new spotifyStrategy(
    {
      clientID: process.env.SPOTIFYCLIENT,
      clientSecret: process.env.SPOTIFYSECRET,
      callbackURL: "/auth/spotify/callback",
      proxy: true
    },
    async (accessToken: any, refreshToken: any, expires_in: any, profile: any, done: any) => {
      const existingUser: any = await User.findOne({
        email: profile.emails[0].value
      });
      if (existingUser) {
        if (!existingUser.spotifyId) {
          existingUser.spotifyId = profile.id;
          existingUser.spotifyAccess = accessToken;
          existingUser.spotifyRefresh = refreshToken;
          await existingUser.save();
        }
        return done(null, existingUser);
      }
      const user = await new User({
        spotifyId: profile.id,
        email: profile.emails[0].value,
        first: profile.displayName.split(" ")[0],
        last: profile.displayName.split(" ")[1],
        spotifyRefresh: refreshToken,
        spotifyAccess: accessToken
      }).save();
      done(null, user);
    }
  )
);
