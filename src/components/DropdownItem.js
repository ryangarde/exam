import styled from 'styled-components';

const StyledDropdownItem = styled.div`
	display: flex;
	column-gap: 10px;
	align-items: center;
	padding: 5px 10px;
	font-weight: 500;
	font-size: 14px;

	.avatar {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
`;

const DropdownItem = ({ image, children, ...props }) => {
	return (
		<StyledDropdownItem {...props}>
			{image && <img src={image} className="avatar" alt="" />}
			<div>{children}</div>
		</StyledDropdownItem>
	);
};

export default DropdownItem;
