import React from 'react';
import { render, useRender } from 'redity';
import { Indexs, Keys } from '../../constants';
import { state_errors, state_form } from '../../storage';
import { Button, ErrorDiv, FormStep, H2, H3, InputContainer, InputText, Label } from '../Form.style';


const FirstStep = () => {
	useRender(Keys.STEPS, Indexs.FIRST);

	// TODO: Modularizar handleChange
	const handleChange = (e) => {
		state_form({ ...state_form(), [e.target.name]: e.target.value });
		render(Keys.STEPS, Indexs.FIRST);
	};
	const validateStepOne = !(state_form().firstName.trim().length < 3) && !(state_form().lastName.trim().length < 3) 
			
			
	// TODO: Modularizar handleNextStep / handlePreviusStep
	const handleNextStep = (e) => {
		e.preventDefault();
		if(validateStepOne){
			state_errors({ ...state_errors(), errorOne: false })
			state_form({ ...state_form(), step: state_form().step + 1 });
		}else{
			state_errors({ ...state_errors(), errorOne: true })
		}
		render(Keys.STEPS);
	
	};
	

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
			{state_errors().errorOne && (
				<ErrorDiv>
					Se deben completar los campos correctamente
				</ErrorDiv>
			)}
			
			</InputContainer>
			<Button onClick={handleNextStep}>Siguiente</Button>
		</FormStep>
	);
};

export default FirstStep;
