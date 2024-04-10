import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { ErrorPage } from './components/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import About from './components/About';
import '../style/App.scss';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/product/:idCard" element={<Product />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
