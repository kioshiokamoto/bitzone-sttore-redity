import React from 'react';
import { Button, Container, FormStep } from './Form.style';

const Form = () => {
	return (
		<Container>
			<Form>
				<FormStep>
					step1
					<Button>Siguiente</Button>
				</FormStep>
				<div>
					step2
					<Button>Siguiente</Button>
				</div>
				<div>
					step3
					<Button>Enviar</Button>
				</div>
			</Form>
		</Container>
	);
};

export default Form;
