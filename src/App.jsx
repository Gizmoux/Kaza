import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './pages/Product';
import About from './pages/About';
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
