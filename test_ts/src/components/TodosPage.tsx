import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos/') //with limit
            setTodos(res.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
            />

        </div>
    );
};

export default TodosPage;