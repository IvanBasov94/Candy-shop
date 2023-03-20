import { FC } from 'react';

import Form from '../Form';

import styles from './Feedback.module.scss';

const Feedback: FC = () => {
	return (
		<div className={styles.content}>
			<h2 className={styles.title}>Писать нельзя звонить</h2>
			<p className={styles.text}>Пожелания? Вопросы? Сомнения? Пишите или звоните, мы с радостью поможем.</p>
			<div className={styles.info}>
				<div className={styles.phoneBlock}>
					<article className={styles.phoneItem}>
						<a className={styles.phoneLink} href="tel:8 XXX XXX XX XX">8 XXX XXX XX XX</a>
						<p className={styles.phoneText}>На этот номер можно звонить бесплатно с территории России.</p>
					</article>
					<article className={styles.phoneItem}>
						<a className={styles.phoneLink} href="tel:8 XXX XXX XX XX">8 XXX XXX XX XX</a>
						<p className={styles.phoneText}>Мобильный для связи через Viber, WhatsApp, Telegram.</p>
					</article>
				</div>
				<Form />
			</div>
		</div>
	);
};

export default Feedback;