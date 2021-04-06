import React from 'react';
import { render, useRender } from 'redity';
import { Indexs, Keys } from '../../constants';
import { state_errors, state_form } from '../../storage';
import { Button, ErrorDiv, FormStep, H2, H3, InputContainer, InputText, Label } from '../Form.style';

const SecondStep = () => {
	useRender(Keys.STEPS, Indexs.SECOND);

	const handleChange = (e) => {
		state_form({ ...state_form(), [e.target.name]: e.target.value });
		render(Keys.STEPS, Indexs.SECOND);
	};

	const validateStepTwo = !(state_form().email.trim().length < 3) && !(state_form().phone.trim().length < 3);

	const handleNextStep = (e) => {
		e.preventDefault();
		if (validateStepTwo) {
			state_errors({ ...state_errors(), errorTwo: false });
			state_form({ ...state_form(), step: state_form().step + 1 });
		} else {
			state_errors({ ...state_errors(), errorTwo: true });
		}
		render(Keys.STEPS);
	};

	const handlePreviusStep = (e) => {
		e.preventDefault();
		state_form({ ...state_form(), step: state_form().step - 1 });
		render(Keys.STEPS);
	};

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
