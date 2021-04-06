import React from 'react';
import useThirdStep from '../../hooks/useThirdStep';
import { state_errors, state_form } from '../../storage';
import { Button, ErrorDiv, FormStep, H2, H3, InputContainer, InputText, Label, Select } from '../Form.style';

const ThirdStep = () => {
	const {handleChange, handlePreviusStep} = useThirdStep();
	return (
		<FormStep>
			<H2>Formulario de registro</H2>
			<H3>Paso actual: 3</H3>
			<InputContainer>
				<H3>Mas acerca de ti</H3>
				<Label htmlFor="occupation">Ocupacion:</Label>
				<InputText
					type="occupation"
					id="occupation"
					name="occupation"
					value={state_form().occupation}
					onChange={handleChange}
				/>

				<Label htmlFor="genre">Genero:</Label>
				<Select name="genre" id="genre" value={state_form().genre} onChange={handleChange}>
					<option value="Hombre">Hombre</option>
					<option value="Mujer"> Mujer</option>
					<option value="Otro">Otro</option>
				</Select>

				{state_errors().errorThree && <ErrorDiv>Se deben completar los campos correctamente</ErrorDiv>}
			</InputContainer>
			<div style={{ display: 'flex', width: '100%' }}>
				<Button onClick={handlePreviusStep}>Anterior</Button>
				<Button type="submit">Enviar</Button>
			</div>
		</FormStep>
	);
};

export default ThirdStep;
