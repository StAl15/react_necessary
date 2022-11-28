import React, { useEffect } from 'react';
import Card from "./components/Card"
import { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import { useState } from 'react';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemsPage from './components/UserItemsPage';

function App() {

  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>('')
      setUsers(res.data)
    } catch (e) {
      alert(e)
    }
  }

  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>('') //with limit
      setTodos(res.data)
    } catch (e) {
      alert(e)
    }
  }


  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </div>

        <Route path={'/users'}>
          <UserPage />
        </Route>

        <Route path={'/todos'}>
          <TodosPage />
        </Route>

        <Route path={'/users/:id'}>
          <UserItemsPage />
        </Route>

        <Route path={'/todos/:id'}>
          <TodosItemsPage />
        </Route>

      </div>

    </BrowserRouter>
  );
}

export default App;
