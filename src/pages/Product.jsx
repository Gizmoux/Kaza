import data from '../data/data.json';
import '../../style/Product.scss';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import { ErrorPage } from './ErrorPage';
import Collapse from '../components/Collapse';
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
						<p>{product.location}</p>
					</div>
					<div className="product-host">
						<p>{product.host.name}</p>
						<img src={product.host.picture} alt="profil picture" />
					</div>
				</div>
				<div className="product-infos">
					<div className="tag-container">
						{product.tags.map((tag, index) => (
							<Tag key={index} product={tag} />
						))}
					</div>

					<Rating rating={product.rating} />
				</div>
				<div className="product-description">
					<Collapse title="Description" content={product.description} />
					<Collapse title="Équipements">
						<ul>
							{product.equipments.map((equipment, index) => (
								<li key={index}>{equipment}</li>
							))}
						</ul>
					</Collapse>
				</div>
			</div>
		);
};

export default Product;
