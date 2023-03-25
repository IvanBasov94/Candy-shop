import { FC } from "react";
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import user from '../../assets/img/user.png';
// import userLogin from '../../assets/img'
import emptyBasket from '../../assets/img/emptyBasket.png';
import activeBasket from '../../assets/img/activeBasket.png';

interface IHeaderProps {
	activeBasketProduct: boolean,
	successLogin: boolean,
};

const Header: FC<IHeaderProps> = ({
	activeBasketProduct,
	successLogin
}) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.inner}>
					<NavLink to='/' className={styles.logo}>
						<strong>KOS.CAKE</strong>
					</NavLink>
					<nav className={styles.nav}>
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
						<NavLink to='/autorization' className={styles.navLink}>
							<img
								src={user}
								alt="userLogo"
								className={successLogin ? styles.userLogin : styles.user}
							/>
						</NavLink>
						<NavLink to='/basket' className={styles.navLink}>
							<img src={activeBasketProduct ?
								activeBasket : emptyBasket}
								alt="basketLogo"
							/>
						</NavLink>
					</nav>
				</div>
			</div>
		</header >
	);
};

export default Header;