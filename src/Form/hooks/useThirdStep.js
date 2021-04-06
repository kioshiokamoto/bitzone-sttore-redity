import { render, useRender } from 'redity';
import { Indexs, Keys } from '../constants';
import { state_form } from '../storage';

const useThirdStep = () => {
    useRender(Keys.STEPS, Indexs.THIRD);

	const handleChange = (e) => {
		state_form({ ...state_form(), [e.target.name]: e.target.value });
		render(Keys.STEPS, Indexs.THIRD);
	};

	const handlePreviusStep = (e) => {
		e.preventDefault();
		state_form({ ...state_form(), step: state_form().step - 1 });
		render(Keys.STEPS);
	};
    return {
        handleChange,
        handlePreviusStep
    }
}

export default useThirdStep
