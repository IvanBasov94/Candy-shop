import { FC, useContext } from "react";

import { IBasketProduct } from "../../../../types/types";
import { BasketProductsContext } from "../../../../App";

import styles from './ProductItem.module.scss';
import crossDelete from '../../../../assets/img/crossDelete.png';
import plusCount from '../../../../assets/img/plusCount.png';
import minusCount from '../../../../assets/img/minusCount.png';


interface IProductItemProps {
	product: IBasketProduct,
};


const ProductItem: FC<IProductItemProps> = ({ product }) => {

	const basketProductsContext = useContext(BasketProductsContext);

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
					<li>Подтёки: {product.smudges}</li>
					<li>Дата готовности: {product.date}</li>
					<li>Цвет крема: {product.creamColor}</li>
					<li>Ягодное украшение: {product.berryDecoration}</li>
					{
						product.category === 'Торты' ?
							<li>Вес: {product.weight}</li> :
							<li>Количество: {product.amount}</li>
					}
				</ul>
			</div>
			<div className={styles.item}>
				<span className={styles.price}>{product.price} руб.</span>
			</div>
			<div className={styles.item}>
				<button
					className={styles.btnCount}
					onClick={() =>
						basketProductsContext
							.decrementCountProuduct(product.idBasketProduct)}>
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
						basketProductsContext
							.incrementCountProuduct(product.idBasketProduct)}>
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
					onClick={() => basketProductsContext
						.deleteProduct(product.idBasketProduct)}
				>
					<img
						className={styles.btnDeleteImg}
						src={crossDelete}
						alt="crossDelete"
					/>
				</button>
			</div>
		</section >
	);
};

export default ProductItem;

