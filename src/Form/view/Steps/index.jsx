import React, { useEffect } from 'react';
import { FormContainer } from '../Form.style';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

import { state_form } from '../../storage';
import { Keys, Indexs } from '../../constants';
import { useRender,render, renders } from 'redity';

const Steps = () => {
	useRender(Keys.STEPS);

	// TODO: Solucionar inconveniente - state_form().step no se pasa
	const step = state_form().step;
	
	useEffect(()=>{
		console.log('Index'+ state_form().step)
		if(state_form().step===1){
			render(Keys.STEPS, Indexs.FIRST)
		}
		if(state_form().step===2){
			render(Keys.STEPS, Indexs.SECOND)
		}
	},[step])

	return (
		<FormContainer>
			{state_form && (
				<>
					{state_form().step===1 && <FirstStep />}
					{state_form().step===2 && <SecondStep />}
				</>
			)}
		</FormContainer>
	);
};

export default Steps;
