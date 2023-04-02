import { FC, useRef, useContext } from "react";

import ProductList from "./components/ProductList";
import MyInput from "../../components/UI/MyInput";
import MyButton from "../../components/UI/MyButton";

import { BasketProductsContext } from "../../App";

import styles from './BasketPage.module.scss';


const BasketPage: FC = () => {

	const basketProductsContext = useContext(BasketProductsContext)

	const productsRef = useRef<HTMLHeadingElement>(null);

	const handleBtnClickOrder = () => {
		executeProductsScroll();
		basketProductsContext.handleOrderProcess();
	};

	const executeProductsScroll = () =>
		productsRef.current?.scrollIntoView();

	let summaryPrice = basketProductsContext.basketProducts
		.reduce((total, value) => {
			total += value.price * value.count;
			return total;
		}, 0);

	return (
		<main className={styles.basket}>
			<div className={styles.container}>
				<h2
					className={styles.title}
					ref={productsRef}
				>
					Корзина
				</h2>
				{
					basketProductsContext.activeBasketProduct ? (
						<ProductList />
					) : (
						<span className={styles.text}>
							Товары отсутствуют
						</span>
					)
				}
				{basketProductsContext.orderProcess && (
					<p className={styles.successOrder}>
						Ваш заказ успешно оформлен
					</p>
				)}
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
						onClick={handleBtnClickOrder}
					/>
				</div>
			</div>
		</main>
	);
};

export default BasketPage;