import { render, useRender } from 'redity';
import { Indexs, Keys } from '../constants';
import { state_errors, state_form } from '../storage';
const useSecondStep = () => {
    useRender(Keys.STEPS, Indexs.SECOND);

	const handleChange = (e) => {
		state_form({ ...state_form(), [e.target.name]: e.target.value });
		render(Keys.STEPS, Indexs.SECOND);
	};

	const validateStepTwo = !(state_form().email.trim().length < 3) && !(state_form().phone.trim().length < 3);

	const handleNextStep = (e) => {
		e.preventDefault();
		if (validateStepTwo) {
			state_errors({ ...state_errors(), errorTwo: false });
			state_form({ ...state_form(), step: state_form().step + 1 });
		} else {
			state_errors({ ...state_errors(), errorTwo: true });
		}
		render(Keys.STEPS);
	};

	const handlePreviusStep = (e) => {
		e.preventDefault();
		state_form({ ...state_form(), step: state_form().step - 1 });
		render(Keys.STEPS);
	};
	return {
		handleChange,
		handleNextStep,
		handlePreviusStep
	}
}

export default useSecondStep
