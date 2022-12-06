import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import Hover from './components/Hover';
import List from './components/List';
import useDebounce from './hooks/useDebounce';
import useInput from './hooks/useInput';
import axios from 'axios'
import useRequest from './hooks/useRequest';

function App() {

  // const [todos, loading, error] = useRequest(fetchTodos)

  // const [value, setValue] = useState('')
  // const debouncedSearch = useDebounce(search, 500)

  // function fetchTodos() {

  //   return axios.get(`https://jsonplaceholder.typicode.com/todos?`)
  // }

  // if (loading) {
  //   return <h1>Is loading .....</h1>
  // }

  // if (error) {
  //   return <h1>Something went wrong while getting response</h1>
  // }

  // function search(query) {

  //   fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json)
  //     })
  // }

  // const username = useInput('')
  // const password = useInput('')

  // const onChange = e => {
  //   setValue(e.target.value)
  //   debouncedSearch(e.target.value)
  // }

  return (

    <div className="App">

      {/* {todos && todos.map(todo =>
        <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
          {todo.id}. {todo.title}
        </div>
      )} */}

      {/* <div>
        <input type="text" value={value} onChange={onChange} />
      </div> */}

      {/* <Hover /> */}

      {/* <List /> */}

      {/* <input {...username} type="text" placeholder='Username' />
      <input {...password} type="text" placeholder='Username' />
      <button onClick={() => console.log(username.value, password.value)}> Click</button> */}

    </div>
  );
}

export default App;
