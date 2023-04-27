import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import todo from './store/todo';

const Todo = observer(() => {
    const [todoUser, setTodoUser] = useState('');
    return (
        <div>
            <input
                onChange={(e) => setTodoUser(e.target.value)}
                placeholder={"some todo"}
            /><br/>
            <button
                onClick={() => todo.addTodo({
                    id: todo.getTodos().length + 1,
                    title: todoUser,
                    completed: false
                })}>
                Add todo
            </button>
            <button onClick={() => todo.fetchTodos()}>fetch todo</button>
            {todo.todos.map(t =>
                <div className='todo' key={t.id}>
                    <input
                        type="checkbox"
                        checked={t.completed}
                        onChange={() => todo.completeTodo(t.id)}/>
                    {t.title}
                    <button
                        onClick={() => todo.removeTodo(t.id)}>
                        X
                    </button>
                </div>
            )}
        </div>
    );
})

export default Todo;
