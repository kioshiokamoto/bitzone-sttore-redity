import React, { useEffect } from 'react';
import { render, useRender } from 'redity';
import { Indexs, Keys } from '../../constants';
import { state_form } from '../../storage';
import { Button, FormStep, H2, H3, InputContainer, InputText, Label } from '../Form.style';

const SecondStep = () => {
	useRender(Keys.STEPS, Indexs.SECOND);

	
	useEffect(() => {
		if(state_form().step===1){
			console.log(`ingresa`)
			render(Keys.STEPS, Indexs.FIRST)
		}
		if(state_form().step===2){
			console.log(`ingresa2`)
			render(Keys.STEPS, Indexs.SECOND)
		}	

	}, [state_form().step])

	return (
		<FormStep>
			<H2>Formulario de registro</H2>
			<H3>Paso actual: 2</H3>
			<InputContainer>
				<H3>Informacion de contacto</H3>
				<Label htmlFor="email">Correo:</Label>
				<InputText type="email" id="email" name="email" />

				<Label htmlFor="phone">Celular:</Label>
				<InputText type="number" id="phone" name="phone" />
			</InputContainer>
			<div style={{ display: 'flex', width: '100%' }}>
				<Button>Anterior</Button>
				<Button>Siguiente</Button>
			</div>
		</FormStep>
	);
};

export default SecondStep;
