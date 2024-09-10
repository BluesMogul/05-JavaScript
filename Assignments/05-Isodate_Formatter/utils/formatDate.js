// // Example using import
// import { add, subtract } from './improvedMathUtil.js';
// const result1 = add(5, 3);
// console.log(result1); // Output: 8
// const result2 = subtract(10, 4);
// console.log(result2); // Output: 6

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'


dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display

const currentDate = dayjs();
const convertDate = currentDate.format('YYY-MM-DD HH:mm:ss');
console.log(formattedDate)