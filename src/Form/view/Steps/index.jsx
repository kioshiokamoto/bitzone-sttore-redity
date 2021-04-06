import React from 'react';
import useSteps from '../../hooks/useSteps';
import { state_form } from '../../storage';
import { FormContainer } from '../Form.style';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const Steps = () => {
	
	const {handleSubmit, step} = useSteps();
	

	return (
		<FormContainer onSubmit={handleSubmit}>
			{state_form && (
				<>
					{step===1 && <FirstStep />}
					{step===2 && <SecondStep />}
					{step===3 && <ThirdStep/>}
				</>
			)}
		</FormContainer>
	);
};

export default Steps;
