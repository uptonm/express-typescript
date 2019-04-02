import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

require('dotenv').config();
require('./services/authService');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIEKEY || '']
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('tiny'));
app.use(helmet({}));
app.use(cors());

import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
// import spotifyRoutes from './routes/spotifyRoutes';

app.use(authRoutes);
app.use('/api', userRoutes);
// app.use('/api', spotifyRoutes);

export default app;
