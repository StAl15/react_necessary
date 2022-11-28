import React, { useState, useEffect } from 'react';
import './styles/App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './Components/UI/Navbar/Navbar';
import Error from './pages/Error';
import AppRouter from './Components/AppRouter';
import { AuthContext } from './context';


function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      setIsLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App;
