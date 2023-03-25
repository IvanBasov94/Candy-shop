import { FC } from 'react';

import './MyButton.scss';

interface IMyButtonProps {
	type: 'button' | 'submit' | 'reset',
	size: string,
	color: string,
	text: string,
	onClick?: () => void,
};

const MyButton: FC<IMyButtonProps> = ({
	type,
	size,
	color,
	text,
	onClick,
}) => {

	return (
		<button
			className={`myBtn ${size} ${color}`}
			type={type}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default MyButton;