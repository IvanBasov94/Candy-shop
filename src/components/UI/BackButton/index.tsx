import { FC } from 'react';

import styles from './BackButton.module.scss';
import back from '../../../assets/img/back.png';


const BackButton: FC = () => {
	return (
		<button className={styles.btnBack}>
			<img className={styles.logo} src={back} alt='Назад' />
			<span className={styles.text}>Назад</span>
		</button>
	);
};

export default BackButton;