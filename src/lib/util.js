//named export , method 1
export function isFriday(day) {
  if (day.toUpperCase() === 'FRIDAY') {
    return 'TGIF';
  } else {
    return 'Nope';
  }
}

//named export , method 2
export const isWeekday = day =>
  day === 'Sunday' || day === 'Saturday' ? false : true;

export const isWeekend = day =>
  !(day === 'Sunday' || day === 'Saturday') ? false : true;

// export isWeekend;  //this syntax is wrong

//default export
export default isWeekend;
// or
// export default () => console.log('say hello');
