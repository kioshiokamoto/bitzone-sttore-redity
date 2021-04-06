import React from 'react';
import useSecondStep from '../../hooks/useSecondStep';
import { state_errors, state_form } from '../../storage';
import { Button, ErrorDiv, FormStep, H2, H3, InputContainer, InputText, Label } from '../Form.style';

const SecondStep = () => {
	const { handleChange, handleNextStep, handlePreviusStep } = useSecondStep();

	return (
		<FormStep>
			<H2>Formulario de registro</H2>
			<H3>Paso actual: 2</H3>
			<InputContainer>
				<H3>Informacion de contacto</H3>
				<Label htmlFor="email">Correo:</Label>
				<InputText type="email" id="email" name="email" value={state_form().email} onChange={handleChange} />

				<Label htmlFor="phone">Celular:</Label>
				<InputText type="number" id="phone" name="phone" value={state_form().phone} onChange={handleChange} />
				{state_errors().errorTwo && <ErrorDiv>Se deben completar los campos correctamente</ErrorDiv>}
			</InputContainer>
			<div style={{ display: 'flex', width: '100%' }}>
				<Button onClick={handlePreviusStep}>Anterior</Button>
				<Button onClick={handleNextStep}>Siguiente</Button>
			</div>
		</FormStep>
	);
};

export default SecondStep;
