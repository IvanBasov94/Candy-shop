import { FC } from 'react';
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


const App: FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage products={products} />} />
				<Route path='/help' element={<HelpPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/autorization' element={<AutorizationPage />} />
				<Route path='/basket' element={<BasketPage />} />
				<Route path='/product/:id' element={<ProductPage />} />
			</Routes >
			<Footer />
		</>
	);
}

export default App;
