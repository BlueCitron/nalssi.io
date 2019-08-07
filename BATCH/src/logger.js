import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import moment from 'moment';

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
};

const logger = winston.createLogger({
    level: 'debug', // 최소 레벨
    // 파일저장
    transports: [
      new winstonDaily({
          name: 'info-file',
          filename: 'log/%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          colorize: false,
          maxsize: 50000000,
          maxFiles: 1000,
          level: 'info',
          showLevel: true,
          json: false,
          timestamp: timeStampFormat,
          format: winston.format.printf(
              info => `${moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ')} [${info.level.toUpperCase()}] - ${info.message}`)
      }),
      new winston.transports.Console({
          name: 'debug-console',
          colorize: true,
          level: 'debug',
          showLevel: true,
          json: false,
          timestamp: timeStampFormat,
          format: winston.format.printf(
              info => `${moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ')} [${info.level.toUpperCase()}] - ${info.message}`)
      }),
    ]
});

export default logger;
