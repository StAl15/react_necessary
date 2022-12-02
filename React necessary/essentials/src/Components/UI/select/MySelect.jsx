import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel>{defaultValue}</InputLabel>
            <Select
                value={value}
                label={defaultValue}
                onChange={event => onChange(event.target.value)}
                autoWidth
            >
                <MenuItem disabled value="">
                    <em>{defaultValue}</em>
                </MenuItem>
                {options.map(option =>
                    <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>
                )}

            </Select>
        </FormControl>

        // <select
        //     value={value}
        //     onChange={event => onChange(event.target.value)}
        // >
        //     <option disabled value="">{defaultValue}</option>
        //     {options.map(option =>
        //         <option key={option.value} value={option.value}>
        //             {option.name}
        //         </option>
        //     )}
        // </select>
    );
}

export default MySelect;
