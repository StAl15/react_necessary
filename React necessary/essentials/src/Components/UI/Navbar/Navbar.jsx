import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    if (isAuth == false) {
        return <div></div>
    }
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <Box sx={{ display: 'flex', width: '100%', mb: 10}}>
            <AppBar  elevation={0} sx={{ backgroundColor: '#cce5ff' }} position="fixed">
                <Toolbar>
                    <MyButton sx={{ mr: 'auto' }} variant="outlined" onClick={logout}>
                        Exit
                    </MyButton>

                    <Typography sx={{ mr: 2 }}>
                        <Link
                            style={{ textDecoration: 'none', color: 'black' }}
                            to="/about" >
                            About
                        </Link>
                    </Typography>

                    <Typography>
                        <Link
                            style={{ textDecoration: 'none', color: 'black' }}
                            to="/posts">
                            Posts
                        </Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
        // <div className='navbar'>
        // <MyButton onClick={logout}>
        //     Exit
        // </MyButton>
        //     <div className='navbar__links'>
        // <Link to="/about" >About</Link>
        // <Link to="/posts"> Posts </Link>
        //     </div>
        // </div>
    );
}

export default Navbar;
