import styled from 'styled-components';

const StyledSelect = styled.select`
	padding: ${(props) => props.padding || '8px 14px'};
	border: 1px solid #aeb1be;
	border-radius: 4px;
	width: ${(props) => props.width};
	padding-right: ${(props) => props.paddingRight};
`;

const Select = (props) => <StyledSelect {...props} />;

export default Select;
