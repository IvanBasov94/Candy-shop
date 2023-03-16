import { FC } from 'react';

import './MyInput.scss';

interface IMyInputProps {
	text: string,
	type: string,
	size: string,
	color: string,
};

const MyInput: FC<IMyInputProps> = ({
	text,
	type,
	size,
	color,
}) => {

	return (
		<input
			type={type}
			placeholder={text}
			className={`myInput ${size} ${color}`}
		/>
	);
};

export default MyInput;