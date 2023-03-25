import { FC } from "react";

import ProductList from "./components/ProductList";
import MyInput from "../../components/UI/MyInput";
import MyButton from "../../components/UI/MyButton";

import { IProduct } from "../../types/types";

import styles from './BasketPage.module.scss';

interface IBasketPageProps {
	basketProducts: IProduct[],
	deleteProduct: (id: number) => void,
	activeBasketProduct: boolean,
};

const BasketPage: FC<IBasketPageProps> = ({
	basketProducts,
	deleteProduct,
	activeBasketProduct
}) => {

	let summaryPrice = basketProducts.reduce((total, value) => {
		total += value.price
		return total;
	}, 0);

	return (
		<main className={styles.basket}>
			<div className={styles.container}>
				<h2 className={styles.title}>Корзина</h2>
				{
					activeBasketProduct ? (
						<ProductList
							basketProducts={basketProducts}
							deleteProduct={deleteProduct}
						/>
					) : (
						<span className={styles.text}>
							Товары отсутствуют
						</span>
					)
				}
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
							name='promoCode'
						/>
					</div>
					<div className={styles.summary}>
						<span>Итого: {summaryPrice} руб.</span>
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