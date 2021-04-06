import React, { useEffect } from 'react';
import { render, useRender } from 'redity';
import { Indexs, Keys } from '../../constants';
import { state_form } from '../../storage';
import { Button, FormStep, H2, H3, InputContainer, InputText, Label } from '../Form.style';

const SecondStep = () => {
	useRender(Keys.STEPS, Indexs.SECOND);

	const handleChange = (e) => {
		state_form({ ...state_form(), [e.target.name]: e.target.value });
		render(Keys.STEPS, Indexs.SECOND);
	};

	const handleNextStep = (e) => {
		e.preventDefault();
		state_form({ ...state_form(), step: state_form().step + 1 });
		//console.log(state_form().step);
		//render(Keys.STEPS, Indexs.SECOND);
		render(Keys.STEPS);
	};
	const handlePreviusStep = (e) => {
		e.preventDefault();
		state_form({ ...state_form(), step: state_form().step - 1 });
		//console.log(state_form());
		//render(Keys.STEPS, Indexs.SECOND);
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
			</InputContainer>
			<div style={{ display: 'flex', width: '100%' }}>
				<Button onClick={handlePreviusStep}>Anterior</Button>
				<Button onClick={handleNextStep}>Siguiente</Button>
			</div>
		</FormStep>
	);
};

export default SecondStep;
