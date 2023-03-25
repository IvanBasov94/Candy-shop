import { FC, useState, useRef } from "react";

import SectionHelp from "./components/SectionHelp";
import MyButton from "../../components/UI/MyButton";

import { IInfoHelp } from "../../types/types";
import { initInfoHelp } from "../../assets/data/infoHelp";
import styles from './HelpPage.module.scss';


const HelpPage: FC = () => {

	const [infoHelp, setInfoHelp] = useState<IInfoHelp[]>(initInfoHelp);

	const changeVisible = (id: number) => {
		setInfoHelp(infoHelp.map(info => {
			if (info.id !== id) return info;

			return {
				...info,
				visible: !info.visible,
			}
		}));
	};

	const buyRef = useRef<HTMLElement>(null);
	const deliveryRef = useRef<HTMLElement>(null);

	const executeBuyScroll = () => buyRef.current?.scrollIntoView();
	const executeDeliveryScroll = () => deliveryRef.current?.scrollIntoView()

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h2 className={styles.title}>Помощь</h2>
				<div className={styles.buttonsBlock}>
					<MyButton
						type='button'
						size='small'
						color='pink'
						text='Покупка'
						onClick={executeBuyScroll}
					/>
					<MyButton
						type='button'
						size='large'
						color='pink'
						text='Оплата и доставка'
						onClick={executeDeliveryScroll}
					/>
				</div>
				<section ref={buyRef}>
					<SectionHelp
						infoHelp={infoHelp}
						category='Покупка'
						changeVisible={changeVisible}
					/>
				</section>
				<section ref={deliveryRef}>
					<SectionHelp
						infoHelp={infoHelp}
						category='Оплата и доставка'
						changeVisible={changeVisible}
					/>
				</section>
			</div>
		</main>
	);
};

export default HelpPage;