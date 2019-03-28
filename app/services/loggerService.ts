import colors from 'colors';
const loggerService = {
  info: (message: string) => {
    console.log(
      `[${colors.cyan('INFO')}] ${colors.grey.bold(
        new Date().toLocaleTimeString()
      )} - ${colors.green(message)}`
    );
  },
  error: (message: string) => {
    console.log(
      `[${colors.red('ERROR')}] ${colors.grey.bold(new Date().toLocaleTimeString())} - ${colors.red(
        message
      )}`
    );
  }
};

export default loggerService;
