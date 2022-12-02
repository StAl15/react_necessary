import React, { useContext } from 'react';
import MyButton from '../Components/UI/button/MyButton';
import MyInput from '../Components/UI/input/MyInput';
import { AuthContext } from '../context';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import cl from "../styles/App.css"


const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (

        <div className='loginParent' style={cl.loginParent}>
            <div className='loginContent' style={cl.loginContent}>
                <Typography variant="h3" gutterBottom>
                    Login page
                </Typography>
                <form onSubmit={login}>
                    <MyInput type="text" label="Login" defaultValue="" variant="outlined" sx={{ mb: 2 }} />
                    <MyInput type="password" label="Password" defaultValue="" variant="outlined" sx={{ mb: 2 }} />
                    <MyButton variant="outlined" disableElevation type="submit">Login</MyButton>
                </form>
            </div>
        </div>
    );
}

export default Login;
