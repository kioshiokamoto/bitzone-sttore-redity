import React, { useEffect } from 'react';
import { Button, FormStep, H2, H3, InputContainer, InputText, Label } from '../Form.style';

import { state_form } from '../../storage';
import { Keys, Indexs } from '../../constants';
import { render, useRender } from 'redity';

const FirstStep = () => {
	useRender(Keys.STEPS, Indexs.FIRST);
	const handleChange = (e) => {
		state_form({...state_form(),[e.target.name]:e.target.value})
		render(Keys.STEPS, Indexs.FIRST);
	};
	
	const handleNextStep = (e)=>{
		e.preventDefault();
		state_form({...state_form(),step:state_form().step+1});
		//console.log(state_form());
		render(Keys.STEPS, Indexs.SECOND);
	}
	/* useEffect(() => {
		if(state_form().step===1){
			render(Keys.STEPS, Indexs.FIRST)
		}
		if(state_form().step===2){
			render(Keys.STEPS, Indexs.SECOND)
		}	

	}, [state_form().step]) */
	return (
		<FormStep>
			<H2>Formulario de registro</H2>
			<H3>Paso actual: 1</H3>
			<InputContainer>
				<H3>Informacion basica</H3>
				<Label htmlFor="firstName">Nombres:</Label>
				<InputText
					type="text"
					id="firstName"
					name="firstName"
					value={state_form().firstName}
					onChange={handleChange}
				/>

				<Label htmlFor="lastName">Apellidos:</Label>
				<InputText
					type="text"
					id="lastName"
					name="lastName"
					value={state_form().lastName}
					onChange={handleChange}
				/>
			</InputContainer>
			<Button onClick={handleNextStep}>Siguiente</Button>
		</FormStep>
	);
};

export default FirstStep;
