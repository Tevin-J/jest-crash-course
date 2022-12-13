const { default: axios } = require('axios');
const Ajax = require('./async');
jest.mock('axios');

describe('Ajax: echo', () => {
  test('should return value async', async () => {
    const result = await Ajax.echo('hello async');
    expect(result).toBe('hello async');
  });

  test('should catch error', async () => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe('data not found');
    }
  });
});

describe('Ajax: get', () => {
  let response;
  let todos;

  beforeEach(() => {
    todos = [
      { id: 1, title: 'Todo1', completed: false },
      { id: 2, title: 'Todo2', completed: true },
      { id: 3, title: 'Todo3', completed: false },
    ];
    response = {
      data: { todos },
    };
  });

  test('should return data from backend', () => {
    axios.get.mockReturnValue(response);

    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
