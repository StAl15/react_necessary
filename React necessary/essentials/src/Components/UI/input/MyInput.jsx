import React from 'react';
import classes from './MyInput.module.css'
import TextField from '@mui/material/TextField';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <TextField
          id={classes.myInput}
          ref={ref}
          className={classes.myInput}
          {...props} 
        />
        // <input ref={ref} className={classes.myInput} {...props} />
    );
})

export default MyInput;
