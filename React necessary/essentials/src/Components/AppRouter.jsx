import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Posts from '../pages/Posts';
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { publicRoutes, privateRoutes } from '../router/routes';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ? <div>
                <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path} element={route.element} key={route.path} />
                    )
                    }
                    <Route path="/*" element={<Navigate to="/posts" replace />} />
                </Routes >
            </div >
            :
            <div>
                <Routes>
                    {
                        publicRoutes.map(route =>
                            <Route path={route.path} element={route.element} key={route.path} />
                        )
                    }
                    <Route path="/*" element={<Navigate to="/login" replace />} />
                </Routes >
            </div >

    );
}

export default AppRouter;
