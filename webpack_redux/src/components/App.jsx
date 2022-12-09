import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { setCount } from '../reducers/reposReducer';
import './app.less'
import Card from './card/card';
import Main from './main/Main';
import { Navigate } from 'react-router-dom';
import Error from './main/Error';

const App = () => {
    const dispatch = useDispatch()


    return (
        <BrowserRouter>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/card/:username/:reponame' element={<Card />} />
                    <Route path='/error' element={<Error />} />
                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;
