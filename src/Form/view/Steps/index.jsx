import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { render, useRender } from 'redity';
import { Indexs, Keys } from '../../constants';
import { state_errors, state_form } from '../../storage';
import { FormContainer } from '../Form.style';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

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
		if(!(state_form().occupation.trim().length < 3)){
			console.log(state_form());
			state_errors({ ...state_errors(), errorThree: false })
			state_form.init();
			history.push('/')
		}else{
			state_errors({ ...state_errors(), errorThree: true })
		}
		render(Keys.STEPS)
	}


	return (
		<FormContainer onSubmit={handleSubmit}>
			{state_form && (
				<>
					{state_form().step===1 && <FirstStep />}
					{state_form().step===2 && <SecondStep />}
					{state_form().step===3 && <ThirdStep/>}
				</>
			)}
		</FormContainer>
	);
};

export default Steps;
