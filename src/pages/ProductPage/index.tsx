import { FC } from "react";
import { NavLink, useParams } from "react-router-dom";

import MyButton from "../../components/UI/MyButton";
import BackButton from "../../components/UI/BackButton";

import { products } from "../../assets/data/products";

import styles from './ProductPage.module.scss';

type Params = {
	id: string;
};

interface IProductPageProps {
	addBasketProduct: (id: number) => void,
};

const ProductPage: FC<IProductPageProps> = ({ addBasketProduct }) => {

	const { id } = useParams<Params>();

	const product = products[Number(id) - 1];

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<NavLink to={'/'}><BackButton /></NavLink>
				<div className={styles.product}>
					<div className={styles.image}>
						<img
							src={product.image}
							alt={product.title}
						/>
					</div>
					<div className={styles.info}>
						<h3 className={styles.title}>
							{product.title}
						</h3>
						<div className={styles.options}>
							{product.price} руб. / 				{
								(product.category === 'Торты') ?
									`${product.weight} кг.` :
									`${product.amount} шт.`
							}
						</div>
						<p className={styles.description}>
							{product.desctiption}
						</p>
						<MyButton
							type='button'
							size='small'
							color='pink'
							text='Заказать'
							onClick={() => addBasketProduct(Number(id))}
						/>
					</div>
				</div>
			</div>
		</main >
	);
};

export default ProductPage;