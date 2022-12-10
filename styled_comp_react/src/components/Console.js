import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';


const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
font-size: 24px;
border:none;
resize: none;
color: ${props => props.color || props.theme.color.primary};
&:focus {
    outline: none;
}

@media ${props => props.theme.media.phone} {
    border: 1px solid red;
}

@media ${props => props.theme.media.tablet} {
    border: 1px solid blue;
}

`

const Console = ({ color, ...props }) => {
    const [lines, setLines] = useState(['C/users/RGT>'])

    const onKeyPress = e => {
        if (e.charCode == 13) { //enter btn
            setLines([...lines, "C/users/RGT>"])
        }
    }

    return (
        <Flex>
            <Flex direction={"column"} margin="0 10px">
                {lines.map(line =>
                    <Line color={color}>{line}</Line>)}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
        </Flex>
    )
}

export default Console;
