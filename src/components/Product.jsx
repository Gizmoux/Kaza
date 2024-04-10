import data from '../data/data.json';
import '../../style/Product.scss';
import { ErrorPage } from './ErrorPage';
import { useState, Navigate } from 'react';
import { useParams } from 'react-router-dom';
const Product = () => {
	const { idCard } = useParams();
	const [products, setProducts] = useState(data);

	const product = products.find(product => product.id === idCard);
	if (!product) {
		return <Navigate to="*" replace={<ErrorPage />} />;
	} else
		return (
			<div key={data.id}>
				<p>Carousel</p>
				<img
					src={product.pictures[0]}
					alt={data.title}
					className="image-product"
				/>
				<h1>{product.title}</h1>
				<h2>ID de ce produit est {idCard}</h2>
				<p>Localisation{product.location}</p>
				<p>Hôte{product.host.name}</p>
				<p>Rating{product.rating}</p>
				<p>Description{product.description}</p>
				<p>Tags{product.tags[0]}</p>
				<p>Équipements{product.equipments[0]}</p>
			</div>
		);
};

export default Product;
