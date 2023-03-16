import { FC } from "react";
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import user from '../../assets/img/user.png';
import basket from '../../assets/img/basket.png';


const Header: FC = () => {
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
							<img src={user} alt="userLogo" />
						</NavLink>
						<NavLink to='/basket' className={styles.navLink}>
							<img src={basket} alt="basketLogo" />
						</NavLink>
					</nav>
				</div>
			</div>
		</header >
	);
};

export default Header;