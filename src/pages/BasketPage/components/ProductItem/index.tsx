import { FC } from "react";

import styles from './ProductItem.module.scss';
import { IProduct } from "../../../../types/types";

interface IProductItemProps {
	product: IProduct,
};

const ProductItem: FC<IProductItemProps> = ({ product }) => {
	return (
		<section className={styles.product}>
			<div className={styles.item}>
				<img
					className={styles.image}
					src={product.image}
					alt={product.title}
				/>
			</div>
			<div className={styles.item}>
				<h4 className={styles.title}>{product.title}</h4>
				<ul>
					<li>Покрытие кремом: {product.creamСoverage}</li>
					<li>Подтёки: {product.defect}</li>
					<li>Дата готовности: {product.date}</li>
					<li>Цвет крема: {product.creamColor}</li>
					<li>Ягодное украшение: {product.berryDecoration}</li>
					<li>Вес: {product.weight}</li>
				</ul>
			</div>
			<div className={styles.item}>
				<span className={styles.price}>{product.price} руб.</span>
			</div>
			<div className={styles.item}>
				<button className={styles.btnDelete}>×</button>
			</div>
		</section>
	);
};

export default ProductItem;

