import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addTodo, removeLastTodo } from './reduxToolkit/toolkitSlice';

const addAsyncTodo = () => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(addTodo('ASYNC TODO'));
    }, 2000)
  }
}

function App() {
  const count = useSelector(state => state.toolkit.count)
  const todos = useSelector(state => state.toolkit.todos)

  const dispatch = useDispatch()


  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(removeLastTodo())}>remove last todo</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>add todo</button>
      <button onClick={() => dispatch(addAsyncTodo())}>add ASYNC todo</button>
      <ul>
        {todos.map(todo =>
          <li key={todo}> {todo} </li>
        )}
      </ul>
    </div>
  );
}

export default App;
