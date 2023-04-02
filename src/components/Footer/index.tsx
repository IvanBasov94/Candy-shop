import { FC, useState } from "react";
import { NavLink } from 'react-router-dom';

import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyButton";

import styles from './Footer.module.scss';


const Footer: FC = () => {

	const [emailValue, setEmailValue] = useState<string>('');

	const changeEmailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmailValue(event.target.value);
	};

	const handleSubscribe = () => {
		setEmailValue('');
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.containerFooter}>
				<div className={styles.inner}>
					<h4 className={styles.title}>✨ Хорошие новости ✨</h4>
					<p className={styles.paragraph}>
						Получите промокод на скидку 10%, подписавшись на нашу новостную рассылку. Мы изредка <br />
						пишем о скидках, новинках и всяком таком.
					</p>
					<form className={styles.form}>
						<MyInput
							text='Ваш email'
							type='email'
							size='large'
							color='black'
							name='email'
							value={emailValue}
							onChange={changeEmailValue}
						/>
						<MyButton
							type='submit'
							size='small'
							color='white'
							text='Подписаться'
							onClick={handleSubscribe}
						/>
					</form>
					<p className={styles.notice}>Нажимая кнопку выше, вы даёте согласие на обработку своих персональных данных и соглашаетесь с Условиями использования и Политикой конфиденциальности.</p>
					<nav className={styles.nav}>
						<NavLink to='/' className={({ isActive }) =>
							isActive ?
								`${styles.navLink} ${styles.active}` :
								styles.navLink
						}>
							Магазин
						</NavLink>
						<NavLink to='/help' className={({ isActive }) =>
							isActive ?
								`${styles.navLink} ${styles.active}` :
								styles.navLink
						}>
							Помощь
						</NavLink>
						<NavLink to='/about' className={({ isActive }) =>
							isActive ?
								`${styles.navLink} ${styles.active}` :
								styles.navLink
						}>
							О нас
						</NavLink>
						<NavLink to='/contacts' className={({ isActive }) =>
							isActive ?
								`${styles.navLink} ${styles.active}` :
								styles.navLink
						}>
							Контакты
						</NavLink>
					</nav>
					<NavLink to='/' className={styles.logo}>
						<strong>KOS.CAKE</strong>
					</NavLink>
				</div>
			</div>
		</footer>
	);
};

export default Footer;