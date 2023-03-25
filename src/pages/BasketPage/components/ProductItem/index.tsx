import { FC } from "react";

import styles from './ProductItem.module.scss';
import { IProduct } from "../../../../types/types";
import crossDelete from '../../../../assets/img/crossDelete.png';

interface IProductItemProps {
	product: IProduct,
	deleteProduct: (id: number) => void,
};

const ProductItem: FC<IProductItemProps> = ({
	product,
	deleteProduct
}) => {
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
				<ul className={styles.infoProduct}>
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
				<span className={styles.count}>10 шт.</span>
			</div>
			<div className={styles.item}>
				<button
					className={styles.btnDelete}
					onClick={() => deleteProduct(product.id)}
				>
					<img
						className={styles.btnDeleteImg}
						src={crossDelete}
						alt="crossDelete"
					/>
				</button>
			</div>
		</section>
	);
};

export default ProductItem;

