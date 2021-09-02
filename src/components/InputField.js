import styled from 'styled-components';

const StyledInputField = styled.input`
	padding: ${(props) => props.padding || '8px 14px'};
	border: 1px solid #aeb1be;
	border-radius: 4px;
	width: ${(props) => props.width};
	padding-right: ${(props) => props.paddingRight};
`;

const InputField = (props) => <StyledInputField {...props} />;

export default InputField;
