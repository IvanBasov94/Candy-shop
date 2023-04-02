import { FC } from 'react';

import './MyInput.scss';


interface IMyInputProps {
	text: string,
	type: string,
	size: string,
	color: string,
	name?: string,
	value?: string,
	disabled?: boolean,
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
};


const MyInput: FC<IMyInputProps> = ({
	text,
	type,
	size,
	color,
	name,
	value,
	disabled,
	onChange,
}) => {

	return (
		<input
			type={type}
			placeholder={text}
			className={`myInput ${size} ${color}`}
			name={name}
			value={value}
			disabled={disabled}
			onChange={onChange}
		/>
	);
};

export default MyInput;