import { FC } from 'react';

import MyInput from '../../../../components/UI/MyInput';
import MyButton from '../../../../components/UI/MyButton';

import { typesInput } from '../../../../assets/data/typesInput';

import styles from './Form.module.scss';


const Form: FC = () => {
	return (
		<div className={styles.form}>
			<form>
				{
					typesInput.map(type => (
						<MyInput
							key={type.id}
							text={type.text}
							type={type.type}
							size={type.size}
							color={type.color}
							name='form'
						/>
					))
				}
				<textarea
					className={styles.textArea}
					placeholder='Сообщение'
				/>
				<div className={styles.submitBtn}>
					<MyButton
						type='reset'
						size='large'
						color='pink'
						text='Отправить сообщение'
					/>
				</div>
				<p className={styles.condition}>
					Нажимая кнопку выше, вы даёте согласие на обработку своих персональных данных и соглашаетесь с Условиями использования и Политикой конфиденциальности.
				</p>
			</form>
		</div>
	);
};

export default Form;