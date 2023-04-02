import { FC } from 'react';

import './MyButton.scss';


interface IMyButtonProps {
	type: 'button' | 'submit' | 'reset',
	size: string,
	color: string,
	text: string,
	disabled?: boolean,
	onClick?: () => void,
};


const MyButton: FC<IMyButtonProps> = ({
	type,
	size,
	color,
	text,
	disabled,
	onClick,
}) => {

	return (
		<button
			className={`myBtn ${size} ${color}`}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default MyButton;