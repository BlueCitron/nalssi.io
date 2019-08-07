import cron from 'node-cron';
import axios from 'axios';
import logger from './logger';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const { APP_KEY } = process.env;
// console.log(APP_KEY)

// cron.schedule('*/3 * * * * *', () => {
//   logger.info('Hello World');
// });
import testJob from './jobs/testJob';

(async () => {
  

  const test = new testJob();
  test.run();
})();



// const area = readFile(fs.readFileSync('./resources/area.txt').toString());
// const city = readFile(fs.readFileSync('./resources/city.txt').toString());
// const nx = readFile(fs.readFileSync('./resources/nx.txt').toString());
// const ny = readFile(fs.readFileSync('./resources/ny.txt').toString());
//
// let makeQuery = '';
// for (let i = 0; i < area.length; i++) {
//   makeQuery += `INSERT INTO AREA_CODE (STATE, CITY, NX, NY) VALUES('${area[i]}', '${city[i]}', ${nx[i]}, ${ny[i]});\n`;
// }
//
// fs.writeFileSync('./resources/query.txt', makeQuery, 'utf8');
//
// function readFile (rawString) {
//   return rawString
//   .split('\n')
//   .filter(str => str.length !== 0)
//   .map(str => str.replace(/(\s*)/g, ''))
// }
