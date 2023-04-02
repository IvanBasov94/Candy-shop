import { FC } from 'react';

import styles from './IntroMain.module.scss';


const IntroMain: FC = () => {
	return (
		<div className={styles.intro}>
			<h1 className={styles.title}>
				Натуральный и вкусный торт на заказ
			</h1>
		</div>
	);
};

export default IntroMain;