const Lodash = require('./sync');

describe('Lodash: compact', () => {
  const _ = new Lodash();
  let initArray;

  beforeEach(() => {
    initArray = [false, 42, 0, '', 'Hello', undefined, null, true];
  });

  test('should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test('should remove falsy values from array', () => {
    const resultArray = [42, 'Hello', true];
    expect(_.compact(initArray)).toEqual(resultArray);
  });

  test('should NOT contain falsy values', () => {
    expect(_.compact(initArray)).not.toContain(false);
    expect(_.compact(initArray)).not.toContain(null);
    expect(_.compact(initArray)).not.toContain('');
    expect(_.compact(initArray)).not.toContain(0);
    expect(_.compact(initArray)).not.toContain(undefined);
  });
});

describe('Lodash: groupBy', () => {
  const _ = new Lodash();

  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
  });

  test('should group array items by Math.floor', () => {
    const arr = [2.3, 4.1, 3.5, 2.1, 3.2];
    const result = {
      2: [2.3, 2.1],
      4: [4.1],
      3: [3.5, 3.2],
    };
    expect(_.groupBy(arr, Math.floor)).toEqual(result);
  });

  test('should group array items by length', () => {
    const arr = ['one', 'two', 'three'];
    const result = {
      3: ['one', 'two'],
      5: ['three'],
    };
    expect(_.groupBy(arr, 'length')).toEqual(result);
  });

  test('should NOT return array', () => {
    const arr = ['one', 'two', 'three'];
    expect(_.groupBy(arr, 'length')).not.toBeInstanceOf(Array);
  });
});
