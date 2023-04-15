import { FC } from 'react';

import SpecialInfo from '../SpecialInfo';

import { IInfoHelp } from '../../../../types/types';

import styles from './Info.module.scss';
import arrow from '../../../../assets/img/arrow.png';


interface IInfoProps {
	info: IInfoHelp,
	changeVisible: (id: number) => void,
};


const Info: FC<IInfoProps> = ({
	info,
	changeVisible
}) => {

	return (
		<article className={styles.info}>
			<div
				className={styles.heading}
				onClick={() => changeVisible(info.id)}
			>
				<h4 className={styles.title}>{info.title}</h4>
				<img
					className={
						info.visible ?
							`${styles.arrowButton} ${styles.active}` :
							styles.arrowButton
					}
					src={arrow}
					alt="Arrow"
				/>
			</div>
			{
				(info.id !== 6) ?
					(info.visible && <p className={styles.text}>{info.text}</p>) :
					(info.visible && <SpecialInfo />)
			}
		</article>
	);
};

export default Info;