import React, { useEffect } from 'react';
import { useRender,render } from 'redity';
import { Indexs, Keys } from '../constants';
import { state_form } from '../storage';
import { Container } from './Form.style';
import Steps from './Steps';

const Form = () => {
	
	return (
		<Container>
			<Steps />
		</Container>
	);
};

export default Form;
