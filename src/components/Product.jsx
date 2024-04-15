import data from '../data/data.json';
import '../../style/Product.scss';
import Slideshow from './Slideshow';
import Rating from './Rating';
import { ErrorPage } from './ErrorPage';
import Collapse from './Collapse';
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
				<Slideshow picture={product.pictures} title={data.title} />

				<div className="container-title-host">
					<div className="product-title">
						<h1>{product.title}</h1>
						{/* <h2>ID de ce produit est {idCard}</h2> */}
						<p>{product.location}</p>
					</div>
					<div className="product-host">
						<p>{product.host.name}</p>
						<img src={product.host.picture} alt="profil picture" />
					</div>
				</div>
				<div className="product-infos">
					<p className="tags-container">{product.tags}</p>
					<Rating product={product.rating} />
				</div>
				<div className="product-description">
					<Collapse title="Description" content={product.description} />
					<Collapse title="Équipements" content={product.equipments} />
					{/* <p>Description{product.description}</p> */}
					{/* <p>Équipements{product.equipments[0]}</p> */}
				</div>
			</div>
		);
};

export default Product;
