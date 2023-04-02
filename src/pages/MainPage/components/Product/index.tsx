import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { IProduct } from '../../../../types/types';

import styles from './Product.module.scss';


interface IProductProps {
	product: IProduct,
	category: string,
};


const Product: FC<IProductProps> = ({ product, category }) => {

	return (
		<div className={styles.product}>
			<NavLink to={`product/${product.id}`}>
				<img
					src={product.image}
					alt={product.title}
					className={styles.image}
				/>
			</NavLink>
			<h4 className={styles.title}>{product.title}</h4>
			<div className={styles.options}>
				{product.price} руб. / 				{
					(category === 'Торты') ?
						`${product.weight} кг.` :
						`${product.amount} шт.`
				}
			</div>
		</div>
	);
};

export default Product;