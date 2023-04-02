import { FC } from 'react';

import styles from './SpecialInfo.module.scss';


const SpecialInfo: FC = () => {

	return (
		<div className={styles.text}>
			<p>
				Доставка осуществляется ежедневно c 9-00 до 18-00.
			</p>
			<br />
			<p>
				В пределах МКАД:
				<ul>
					<li>• Заказ до 2500 рублей – 450 рублей.</li>
					<li>• Заказ более 2500 рублей – 350 рублей.</li>
				</ul>
			</p>
			<br />
			<p>
				За МКАД:
				<ul>
					<li>• до 5 км - стоимость доставки 700 рублей.</li>
					<li>• от 5 до 10 км - стоимость доставки 1050 рублей.</li>
					<li>• свыше 10 км - согласовывается  при подтверждении заказа.</li>
				</ul>
			</p>
		</div>
	);
};

export default SpecialInfo;