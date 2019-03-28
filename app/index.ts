import app from './app';
import mongoose from 'mongoose';
import colors from 'colors';
import loggerService from './services/loggerService';

mongoose.connect(
  process.env.DB_URI || 'mongodb://localhost:27017/express-typescript',
  {
    useNewUrlParser: true,
    useCreateIndex: true
  },
  err => {
    if (err) {
      return loggerService.error(err.message);
    }
    loggerService.info(`Connected to MongoDB on port ${colors.blue(27017 + '')} 👌`);
  }
);

app.listen(process.env.PORT || 8000, () => {
  loggerService.info(
    `App is now listening on port ${colors.blue(process.env.PORT || 8000 + '')} 🚀`
  );
});
