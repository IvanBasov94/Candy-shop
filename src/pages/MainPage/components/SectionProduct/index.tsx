import { FC, useContext } from 'react';

import Product from '../Product';
import { ProductsContext } from '../../../../App';

import styles from './SectionProduct.module.scss';


interface ISectionProductProps {
	searchText: string,
	category: string,
};


const SectionProduct: FC<ISectionProductProps> = ({
	searchText,
	category,
}) => {

	const productsContext = useContext(ProductsContext);

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{category}</h2>
			<div className={styles.products}>
				{
					productsContext
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
							return null;
						})
				}
			</div>
		</section>
	);
};

export default SectionProduct;