import { FC, createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import AutorizationPage from './pages/AutorizationPage';
import BasketPage from './pages/BasketPage';
import ContactsPage from './pages/ContactsPage';
import HelpPage from './pages/HelpPage';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';

import Header from './components/Header';
import Footer from './components/Footer';

import { products } from './assets/data/products';
import { IProduct } from './types/types';


const App: FC = () => {

	const [basketProducts, setBasketProducts] = useState<IProduct[]>([]);
	const [successLogin, setSuccessLogin] = useState<boolean>(false);


	const deleteProduct = (id: number) => {
		setBasketProducts(basketProducts
			.filter(product => (product.id !== id))
		);
	};

	const addBasketProduct = (id: number) => {
		setBasketProducts([...basketProducts, products[id - 1]]);
	};

	const activeBasketProduct = basketProducts.length > 0;

	const changeSuccessLogin = () => {
		setSuccessLogin(true);
	};

	return (
		<>
			<Header
				activeBasketProduct={activeBasketProduct}
				successLogin={successLogin}
			/>
			<Routes>
				<Route path='/' element={
					<MainPage
						products={products}
					/>
				} />
				<Route path='/help' element={<HelpPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/autorization' element={
					<AutorizationPage
						successLogin={successLogin}
						changeSuccessLogin={changeSuccessLogin}
					/>
				} />
				<Route path='/basket' element={
					<BasketPage
						basketProducts={basketProducts}
						deleteProduct={deleteProduct}
						activeBasketProduct={activeBasketProduct}
					/>
				} />
				<Route path='/product/:id' element={
					<ProductPage
						addBasketProduct={addBasketProduct}
					/>
				} />
			</Routes >
			<Footer />
		</>
	);
}

export default App;
