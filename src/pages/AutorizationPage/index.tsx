import { FC } from "react";

import MyInput from "../../components/UI/MyInput";

const AutorizationPage: FC = () => {
	return (
		<div>
			<MyInput
				text='Пароль'
				type='text'
				size='large'
				color='white'
			/>
		</div>
	);
};

export default AutorizationPage;