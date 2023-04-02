import { FC, useState, useEffect, useContext } from "react";

import Login from "./components/Login";
import Registration from "./components/Registration";

import { IUser } from "../../types/types";
import { LoginContext } from "../../App";

import styles from './AutorizationPage.module.scss';

const AutorizationPage: FC = () => {

	const [users, setUsers] = useState<IUser[]>([]);
	const [newUser, setNewUser] = useState<IUser>({
		id: 0,
		login: '',
		password: ''
	});
	const [actualUser, setActualUser] = useState<IUser>({
		id: 0,
		login: '',
		password: ''
	});
	const [errorReg, setErrorReg] = useState<string>('');
	const [errorLogin, setErrorLogin] = useState<string>('');
	const [visibleLogin, setVisibleLogin] = useState<boolean>(false);

	const loginContext = useContext(LoginContext);

	useEffect(() => {
		const localData = localStorage.getItem('users');
		const usersData = localData ? JSON.parse(localData) : [];
		setUsers(usersData);
	}, []);

	useEffect(() => {
		localStorage.setItem('users',
			JSON.stringify(users));
	}, [users]);

	const addUsers = () => {
		if (newUser.login.trim().length > 0 &&
			newUser.password.trim().length > 0) {
			setUsers([
				...users,
				{
					...newUser,
					id: Date.now(),
				}
			]);
			setErrorReg('');
		} else {
			setErrorReg('Введите логин или пароль');
		};
		setNewUser({
			id: 0,
			login: '',
			password: '',
		});
	};

	const changeLoginNewUser = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewUser({
			...newUser,
			login: event.target.value,
		})
	};

	const changePasswordNewUser = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewUser({
			...newUser,
			password: event.target.value,
		})
	};

	const changeLoginActualUser = (event: React.ChangeEvent<HTMLInputElement>) => {
		setActualUser({
			...actualUser,
			login: event.target.value,
		});
	};

	const changePasswordActualUser = (event: React.ChangeEvent<HTMLInputElement>) => {
		setActualUser({
			...actualUser,
			password: event.target.value,
		});
	};

	const handleLogin = () => {
		if (loginContext.successLogin) return loginContext.changeSuccessLogin();
		if (actualUser.login.trim().length > 0 &&
			actualUser.password.trim().length > 0) {
			users.map(user => {
				if (user.login === actualUser.login &&
					user.password === actualUser.password) {
					loginContext.changeSuccessLogin()
					setVisibleLogin(true);
					setErrorLogin('');
					setActualUser({
						id: 0,
						login: '',
						password: '',
					});
				} else {
					setErrorLogin('Пользователя с такими данными не существует');
				};
				return null;
			});
		} else {
			setErrorLogin('Введите логин или пароль');
		};
	};

	useEffect(() => {
		setTimeout(() => {
			setVisibleLogin(false);
		}, 2000);
	}, [loginContext.successLogin]);

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				{visibleLogin && (
					<p className={styles.welcome}>
						Добро пожаловать!
					</p>
				)}
				<div className={styles.loginForm}>
					<Login
						actualUser={actualUser}
						changeLoginActualUser={changeLoginActualUser}
						changePasswordActualUser={changePasswordActualUser}
						handleLogin={handleLogin}
						errorLogin={errorLogin}
					/>
					<Registration
						addUsers={addUsers}
						changeLoginNewUser={changeLoginNewUser}
						changePasswordNewUser={changePasswordNewUser}
						errorReg={errorReg}
						newUser={newUser}
					/>
				</div>
			</div>
		</main>
	);
};

export default AutorizationPage;