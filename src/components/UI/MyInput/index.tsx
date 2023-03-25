import { FC } from 'react';

import './MyInput.scss';

interface IMyInputProps {
	text: string,
	type: string,
	size: string,
	color: string,
	name: string,
	value?: string,
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

const MyInput: FC<IMyInputProps> = ({
	text,
	type,
	size,
	color,
	value,
	onChange,
}) => {

	return (
		<input
			type={type}
			placeholder={text}
			className={`myInput ${size} ${color}`}
			value={value}
			onChange={onChange}
		/>
	);
};

export default MyInput;