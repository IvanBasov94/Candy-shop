import React, { FC } from "react";

import MyButton from "../../../../components/UI/MyButton";
import MyInput from "../../../../components/UI/MyInput";

import styles from './Registration.module.scss';
import { IUser } from "../../../../types/types";

interface IRegistrationProps {
	addUsers: () => void,
	changeLoginNewUser: (event: React.ChangeEvent<HTMLInputElement>) => void,
	changePasswordNewUser: (event: React.ChangeEvent<HTMLInputElement>) => void,
	errorReg: string,
	newUser: IUser,
}

const Registration: FC<IRegistrationProps> = ({
	addUsers,
	changeLoginNewUser,
	changePasswordNewUser,
	errorReg,
	newUser,
}) => {
	return (
		<section className={styles.registration}>
			<h2 className={errorReg ? styles.titleError : styles.title}>
				Регистрация
			</h2>
			{
				errorReg && <p className={styles.error}>{errorReg}</p>
			}
			<MyInput
				text='Логин или email'
				type='text'
				size='large'
				color='white'
				name='login'
				value={newUser.login}
				onChange={(event) => changeLoginNewUser(event)}
			/>
			<MyInput
				text='Пароль'
				type='password'
				size='large'
				color='white'
				name='password'
				value={newUser.password}
				onChange={(event) => changePasswordNewUser(event)}
			/>
			<p className={styles.text}>
				Ваши личные данные будут использоваться для упрощения вашей работы с сайтом, управления доступом к вашей учётной записи и для других целей.
			</p>
			<MyButton
				type='button'
				size='large'
				color='pink'
				text='Регистрация'
				onClick={() => addUsers()}
			/>
		</section>
	);
};

export default Registration;