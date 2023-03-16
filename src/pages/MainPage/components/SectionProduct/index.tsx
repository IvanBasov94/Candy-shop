import { FC } from 'react';

import Product from '../Product';
import { IProduct } from '../../../../types/types';

import styles from './SectionProduct.module.scss';

interface ISectionProductProps {
	products: IProduct[],
	searchText: string,
	category: string,
};

const SectionProduct: FC<ISectionProductProps> = ({
	products,
	searchText,
	category,
}) => {

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{category}</h2>
			<div className={styles.products}>
				{
					products
						.filter(product => (
							product.title
								.toLowerCase()
								.includes(searchText.toLowerCase())
						))
						.map(product => {
							if (product.category === category) {
								return <Product
									key={product.id}
									product={product}
									category={category}
								/>
							}
						})
				}
			</div>
		</section>
	);
};

export default SectionProduct;