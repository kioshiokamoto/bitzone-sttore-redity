import React from 'react';
import useFirstStep from '../../hooks/useFirstStep';
import { state_errors } from '../../storage';
import { Button, ErrorDiv, FormStep, H2, H3, InputContainer, InputText, Label } from '../Form.style';


const FirstStep = () => {


	const {handleChange, handleNextStep, firstName,lastName} = useFirstStep();
	

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
					value={firstName}
					onChange={handleChange}
				/>

				<Label htmlFor="lastName">Apellidos:</Label>
				<InputText
					type="text"
					id="lastName"
					name="lastName"
					value={lastName}
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
