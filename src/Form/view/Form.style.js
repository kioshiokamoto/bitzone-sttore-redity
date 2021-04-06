import styled from 'styled-components';

export const Container = styled.div`
	font-family: 'Sora', sans-serif;
	margin: 2em;
`;

export const Button = styled.button`
	font-family: 'Sora', sans-serif;
	padding: 8px 16px;
	color: white;
	font-size: 1rem;
	font-weight: 700;
	background: #535353;
	border: 0px;
	border-radius: 3px;
	appearance: none;
	cursor: pointer;
	margin: 0.2rem 1rem;
	outline: none;
	&:hover {
		background: #939393;
	}
	&:active {
		transform: scale(0.95);
	}
`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    
`
export const FormStep = styled.div`
    
`