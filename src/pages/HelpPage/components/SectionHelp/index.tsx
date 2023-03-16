import { FC } from 'react';

import Info from '../Info';
import { IInfoHelp } from '../../../../types/types';

import styles from './SectionHelp.module.scss';

interface ISectionHelpProps {
	infoHelp: IInfoHelp[],
	category: string,
	changeVisible: (id: number) => void,
};


const SectionHelp: FC<ISectionHelpProps> = ({
	infoHelp,
	category,
	changeVisible,
}) => {
	return (
		<section className={styles.section}>
			<h3 className={styles.title}>{category}</h3>
			<div className={styles.instructions}>
				{
					infoHelp.map(info => {
						if (info.category === category) {
							return <Info
								key={info.id}
								info={info}
								changeVisible={changeVisible}
							/>
						}
					})
				}
			</div>
		</section>
	);
};

export default SectionHelp;