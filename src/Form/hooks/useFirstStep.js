import { render, useRender } from 'redity';
import { Indexs, Keys } from '../constants';
import { state_errors, state_form } from '../storage';

const useFirstStep = () => {
	useRender(Keys.STEPS, Indexs.FIRST);

	const handleChange = (e) => {
		state_form({ ...state_form(), [e.target.name]: e.target.value });
		render(Keys.STEPS, Indexs.FIRST);
	};

	const validateStepOne = !(state_form().firstName.trim().length < 3) && !(state_form().lastName.trim().length < 3);

	const handleNextStep = (e) => {
		e.preventDefault();
		if (validateStepOne) {
			state_errors({ ...state_errors(), errorOne: false });
			state_form({ ...state_form(), step: state_form().step + 1 });
		} else {
			state_errors({ ...state_errors(), errorOne: true });
		}
		render(Keys.STEPS);
	};

	return {
		handleChange,
		handleNextStep,
		firstName: state_form().firstName,
		lastName: state_form().lastName,
	};
};

export default useFirstStep;
