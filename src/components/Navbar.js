import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import InputField from './InputField';
import faker from 'faker';

const StyledNavbar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	background-color: #fff;
	padding: 0 40px;
`;

const SearchBar = styled.div`
	display: flex;
	position: relative;

	.icon {
		position: absolute;
		top: 50%;
		left: 20px;
		transform: translateY(-50%);
		font-size: 20px;
		color: var(--clr-gray);
	}

	.input {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-right: none;
	}
`;

const Auth = styled.div`
	display: flex;
	align-items: center;
	column-gap: 10px;

	img {
		width: 45px;
		height: 45px;
		object-position: center;
		object-fit: cover;
		border-radius: 50%;
	}
`;

const Navbar = () => (
	<StyledNavbar>
		<div>logo</div>
		<SearchBar>
			<span className="icon mdi mdi-magnify"></span>
			<InputField className="input" placeholder="Looking for anything? ..." width="500px" padding="10px 10px 10px 45px" />
			<Button width="110px" height="47px" borderRadius="0 4px 4px 0 ">
				Search
			</Button>
		</SearchBar>

		<div>
			<Auth>
				<img src={faker.image.avatar()} alt="" />
				<div>Ronnie Woodkin</div>
			</Auth>
		</div>
	</StyledNavbar>
);

export default Navbar;
