import { FC } from 'react';

import './MyButton.scss';

interface IMyButtonProps {
	type: 'button' | 'submit' | 'reset',
	size: string,
	color: string,
	text: string,
};

const MyButton: FC<IMyButtonProps> = ({
	type,
	size,
	color,
	text,
}) => {

	return (
		<button className={`myBtn ${size} ${color}`} type={type}>
			{text}
		</button>
	);
};

export default MyButton;