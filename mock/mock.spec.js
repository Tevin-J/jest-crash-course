const { map } = require('./mock');
describe('Mock: map', () => {
  let array;
  let fn;

  beforeEach(() => {
    array = [1, 2, 3, 5];
    fn = jest.fn((x) => x ** 2);
  });

  test('should call callback', () => {
    map(array, fn);
    expect(fn).toHaveBeenCalled();
  });

  test('should call callback needed times', () => {
    map(array, fn);
    expect(fn).toHaveBeenCalledTimes(array.length);
    expect(fn.mock.calls.length).toBe(4);
  });

  test('should pow each element', () => {
    const mappedArray = map(array, fn);
    const expectedResult = [1, 4, 9, 25];
    expect(mappedArray).toEqual(expectedResult);
  });

  test('should fn work with specified results', () => {
    fn.mockReturnValueOnce(100);
    fn.mockReturnValueOnce(200);
    fn.mockReturnValue('42');

    expect(fn()).toBe(100);
    expect(fn()).toBe(200);
    expect(fn()).toBe('42');
    expect(fn()).toBe('42');
  });
});
