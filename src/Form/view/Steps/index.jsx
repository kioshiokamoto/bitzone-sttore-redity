import React, { useEffect } from 'react';
import { FormContainer } from '../Form.style';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

import { state_form } from '../../storage';
import { Keys, Indexs } from '../../constants';
import { useRender,render } from 'redity';

const Steps = () => {
	useRender(Keys.STEPS);

	const step = state_form().step;
	
	useEffect(()=>{
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
