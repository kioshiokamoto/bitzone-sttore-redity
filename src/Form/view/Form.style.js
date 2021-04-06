import styled from 'styled-components';

export const Container = styled.div`
	font-family: 'Sora', sans-serif;
	margin: 2em;
`;

export const Button = styled.button`
	font-family: 'Sora', sans-serif;
	width: 100%;
	padding: 8px 16px;
	color: white;
	font-size: 1rem;
	font-weight: 700;
	background: #535353;
	border: 0px;
	border-radius: 3px;
	appearance: none;
	cursor: pointer;
	margin: 0.2rem 0.2rem;
	outline: none;
	&:hover {
		background: #939393;
	}
	&:active {
		transform: scale(0.95);
	}
`;

export const FormContainer = styled.form`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const FormStep = styled.div`
	background: #eee;
	padding: 1rem 2rem;
	margin: 2rem 0;
	border-radius: 4px;
	max-width: 500px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const H2 = styled.h2`
	margin: 1.5rem 1.5rem;
	color: #2f2f2f;
`;
export const H3 = styled.h3`
	margin: 1rem 0rem;
	color: #2f2f2f;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 2rem 0;
`;
export const Label = styled.label`
    font-weight:300;
    margin-bottom:5px;
    margin-top:1rem;
`
export const InputText = styled.input`
    outline:none;
    padding:0.3rem 0.5rem;
    border: 1px solid lightgrey;
	border-radius: 5px;
	padding-left: 15px;
	font-size: 18px;
    color:#3f3f3f;
`
export const Select = styled.select`
	font-family:'Sora',sans-serif;
	color:#3f3f3f;
	width:100%;
	padding:0.3rem 0.5rem;
	font-size: 18px;
	font-weight: 500;
	border-radius: 5px;
	outline:none;
	background:#fff;
`
export const ErrorDiv = styled.div`
	padding: 0.5rem 1rem;
	width:330px;
	background: #7a0012;
	border-radius: 4px;
	margin-top:1rem;
	margin-bottom:-0.5rem;
	color: #fff;

`