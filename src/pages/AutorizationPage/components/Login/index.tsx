import { FC } from "react";
import MyButton from "../../../../components/UI/MyButton";
import MyInput from "../../../../components/UI/MyInput";

import styles from './Login.module.scss';
import { IUser } from "../../../../types/types";

interface ILoginProps {
	actualUser: IUser,
	changeLoginActualUser: (event: React.ChangeEvent<HTMLInputElement>) => void,
	changePasswordActualUser: (event: React.ChangeEvent<HTMLInputElement>) => void,
	handleLogin: () => void,
	errorLogin: string,
};

const Login: FC<ILoginProps> = ({
	actualUser,
	changeLoginActualUser,
	changePasswordActualUser,
	handleLogin,
	errorLogin,
}) => {
	return (
		<section className={styles.login}>
			<h2 className={errorLogin ? styles.titleError : styles.title}>
				Войти
			</h2>
			{
				errorLogin && <p className={styles.error}>{errorLogin}</p>
			}
			<MyInput
				text='Логин или email'
				type='text'
				size='large'
				color='white'
				name='login'
				value={actualUser.login}
				onChange={(event) => changeLoginActualUser(event)}
			/>
			<MyInput
				text='Пароль'
				type='password'
				size='large'
				color='white'
				name='password'
				value={actualUser.password}
				onChange={(event) => changePasswordActualUser(event)}
			/>
			<div className={styles.options}>
				<div className={styles.item}>
					<input
						className={styles.checkbox}
						type="checkbox"
					/>
					<p className={styles.text}>Запомнить меня</p>
				</div>
				<div className={styles.item}>
					<a className={styles.link} href='#'>
						Забыли пароль?
					</a>
				</div>
			</div>
			<MyButton
				type='button'
				size='large'
				color='pink'
				text='Войти'
				onClick={() => handleLogin()}
			/>
		</section >
	);
};

export default Login;