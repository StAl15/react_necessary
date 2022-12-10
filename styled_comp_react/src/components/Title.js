import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
color: ${props => props.color || props.theme.color.primary};
`

const Title = (props) => {
    return <StyledTitle {...props} />
}

export default Title;
