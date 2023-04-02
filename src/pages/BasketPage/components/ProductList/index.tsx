import { FC, useContext } from "react";

import ProductItem from "../ProductItem";

import { BasketProductsContext } from "../../../../App";


const ProductList: FC = () => {

	const basketProductsContext = useContext(BasketProductsContext);

	return (
		<div>
			{
				basketProductsContext.basketProducts
					.map(product => (
						<ProductItem
							key={product.idBasketProduct}
							product={product}
						/>
					))
			}
		</div>
	);
};

export default ProductList;