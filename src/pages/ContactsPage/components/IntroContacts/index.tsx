import { FC } from 'react';

import styles from './IntroContacts.module.scss';
import sweetsContacts from '../../../../assets/img/sweetsContacts.jpg';


const IntroContacts: FC = () => {
	return (
		<div className={styles.intro}>
			<div className={styles.content}>
				<div className={styles.introItem}>
					<h2 className={styles.title}>Контакты</h2>
					<p className={styles.text}>Мы находимся в Москве.<br />
						Работаем каждый будний день с 10:00 до 18:00.<br />
						В выходные и праздники — отдыхаем 🏡
					</p>
				</div>
				<div className={styles.introItem}>
					<img
						className={styles.image}
						src={sweetsContacts}
						alt='Сake'
					/>
				</div>
			</div>
		</div>
	);
};

export default IntroContacts;