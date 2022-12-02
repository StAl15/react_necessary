import React from 'react';
import cl from './Loader.module.css'
import { CircularProgress } from '@mui/material';

const Loader = () => {
    return (
        // <div className={cl.loader}>

        // </div>
        <CircularProgress disableShrink  />
    );
}

export default Loader;
