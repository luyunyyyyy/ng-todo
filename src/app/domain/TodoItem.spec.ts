import { TodoItem } from './TodoItem';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new TodoItem()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const todo = new TodoItem('hello', 10, true);
    expect(todo.name).toEqual('hello');
    expect(todo.state).toEqual(1);
    expect(todo.id).toEqual(10);
  });
});
