import React from 'react'
import UserList from './components/UserList'
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  )
}
