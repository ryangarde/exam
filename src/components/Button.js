import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 10px;
	border-radius: ${(props) => props.borderRadius || '4px'};
	min-width: ${(props) => (props.minWidth || props.icon ? '0px' : '80px')};
	width: ${(props) => props.width};
	height: ${(props) => props.height || '41px'};
	color: ${(props) => props.color || '#fff'};
	background-color: ${(props) => props.backgroundColor || 'var(--clr-primary)'};
`;

const Button = (props) => <StyledButton {...props}>{props.children}</StyledButton>;

export default Button;
