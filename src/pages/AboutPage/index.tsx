import { FC } from "react";

import styles from './AboutPage.module.scss';
import sweetsAbout from '../../assets/img/sweetsAbout.jpg';


const AboutPage: FC = () => {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h2 className={styles.title}>О нас</h2>
				<div className={styles.block}>
					<img
						src={sweetsAbout}
						alt="Sweets"
						className={styles.image}
					/>
					<div className={styles.text}>
						<p>Немного о нас <span>😀</span></p>
						<p>Марку KOS.CAKE основали двое — Катя и Саша. Мы начали свой путь в 2018 году с домашних тортов. С годами продуктов становилось всё больше, мы изучали новые направления. Неизменным остаётся одно — минимализм в дизайне и наша повёрнутость на качестве.</p>
						<p>Сегодня в нашем магазине представлены десятки уникальных тортов и других сладостей.</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AboutPage;