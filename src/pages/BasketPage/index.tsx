import { FC } from "react";

import ProductList from "./components/ProductList";
import MyInput from "../../components/UI/MyInput";
import MyButton from "../../components/UI/MyButton";

import { products } from "../../assets/data/products";

import styles from './BasketPage.module.scss';


const BasketPage: FC = () => {
	return (
		<main className={styles.basket}>
			<div className={styles.container}>
				<h2 className={styles.title}>Корзина</h2>
				<ProductList products={products} />
				<div className={styles.total}>
					<div className={styles.promoСode}>
						<p className={styles.text}>
							Введите промокод для получения скидки
						</p>
						<MyInput
							text=''
							type='text'
							size='small'
							color='white'
						/>
					</div>
					<div className={styles.summary}>
						<span>Итого: </span>
					</div>
					<MyButton
						type='button'
						size='large'
						color='pink'
						text='Оформить заказ'
					/>
				</div>
			</div>
		</main>
	);
};

export default BasketPage;