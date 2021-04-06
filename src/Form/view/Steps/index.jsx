import React, { useEffect } from 'react';
import { FormContainer } from '../Form.style';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

import { state_form } from '../../storage';
import { Keys, Indexs } from '../../constants';
import { useRender,render } from 'redity';
import ThirdStep from './ThirdStep';
import { useHistory } from 'react-router';
const Steps = () => {
	useRender(Keys.STEPS);

	const step = state_form().step;
	let history = useHistory();
	
	useEffect(()=>{
		if(state_form().step===1){
			render(Keys.STEPS, Indexs.FIRST)
		}
		if(state_form().step===2){
			render(Keys.STEPS, Indexs.SECOND)
		}
	},[step])
	const handleSubmit = (e)=>{
		e.preventDefault();
		console.log(state_form())
		state_form.init();
		history.push('/')
	}

	return (
		<FormContainer onSubmit={handleSubmit}>
			{state_form && (
				<>
					{state_form().step===1 && <FirstStep />}
					{state_form().step===2 && <SecondStep />}
					{state_form().step===3 && <ThirdStep />}
				</>
			)}
		</FormContainer>
	);
};

export default Steps;
