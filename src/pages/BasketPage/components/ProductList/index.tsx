import { FC } from "react";

import ProductItem from "../ProductItem";

import { IBasketProduct } from "../../../../types/types";


interface IProductListProps {
	basketProducts: IBasketProduct[],
	deleteProduct: (id: number) => void,
	incrementCountProuduct: (id: number) => void,
	decrementCountProuduct: (id: number) => void,
};

const ProductList: FC<IProductListProps> = ({
	basketProducts,
	deleteProduct,
	incrementCountProuduct,
	decrementCountProuduct,
}) => {
	return (
		<div>
			{
				basketProducts.map(product => (
					<ProductItem
						key={product.idBasketProduct}
						product={product}
						deleteProduct={deleteProduct}
						incrementCountProuduct={incrementCountProuduct}
						decrementCountProuduct={decrementCountProuduct}
					/>
				))
			}
		</div>
	);
};

export default ProductList;