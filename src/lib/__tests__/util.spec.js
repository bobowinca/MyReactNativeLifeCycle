import util, {isFriday, isWeekend, isWeekday} from '../util';

describe('day of week function', () => {
  // test stuff
  it('Friday is Friday', () => {
    const input = 'Friday';
    const output = 'TGIF';
    expect(isFriday(input)).toEqual(output);
  });

  it('FRIDAY is Friday', () => {
    const input = 'FRIDAY';
    const output = 'TGIF';
    expect(isFriday(input)).toEqual(output);
  });

  it('Sunday is not Friday', () => {
    const input = 'Sunday';
    const output = 'Nope';
    expect(isFriday(input)).toBe(output);
  });

  it('Saturday is not Friday', () => {
    const input = 'Saturday';
    const output = 'TGIF';
    expect(isFriday(input)).not.toEqual(output);
  });

  test('Saturday is weekend', () => {
    const input = 'Saturday';
    // const output = 'TGIF';
    expect(util(input)).toBeTruthy();
  });

  test('Monday is not weekend', () => {
    const input = 'Monday';
    // const output = 'TGIF';
    expect(isWeekend(input)).toBeFalsy();
  });

  test('Wednesday is weekday', () => {
    const input = 'Wednesday';
    // const output = 'TGIF';
    expect(isWeekday(input)).toBeTruthy();
  });
});
