import { FC } from "react";

import styles from './ProductItem.module.scss';
import { IBasketProduct } from "../../../../types/types";
import crossDelete from '../../../../assets/img/crossDelete.png';
import plusCount from '../../../../assets/img/plusCount.png';
import minusCount from '../../../../assets/img/minusCount.png';

interface IProductItemProps {
	product: IBasketProduct,
	deleteProduct: (id: number) => void,
	incrementCountProuduct: (id: number) => void,
	decrementCountProuduct: (id: number) => void,
};

const ProductItem: FC<IProductItemProps> = ({
	product,
	deleteProduct,
	incrementCountProuduct,
	decrementCountProuduct,
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
				<button
					className={styles.btnCount}
					onClick={() =>
						decrementCountProuduct(product.idBasketProduct)}>
					<img
						className={`${styles.btnCountImg} ${styles.btnCircle}`}
						src={minusCount}
						alt="minusCount"
					/>
				</button>
				<span className={styles.count}>{product.count} шт.</span>
				<button
					className={styles.btnCount}
					onClick={() =>
						incrementCountProuduct(product.idBasketProduct)}>
					<img
						className={styles.btnCountImg}
						src={plusCount}
						alt="plusCount"
					/>
				</button>
			</div>
			<div className={styles.item}>
				<button
					className={styles.btnDelete}
					onClick={() => deleteProduct(product.idBasketProduct)}
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

