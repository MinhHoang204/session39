import {useState, useRef, useCallback} from 'react'
interface Todo {
    id: number;
    text: string;
}
export default function Bai5() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = useCallback(() => {
    if (inputRef.current) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputRef.current.value,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      inputRef.current.value = '';
    }
  }, []);
  return (
    <div>Bai5
      <h2>Todo List</h2>
      <input type="text" ref={inputRef} placeholder="Add a new todo" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}
