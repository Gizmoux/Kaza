import '../../style/Card.scss';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
export const Card = () => {
	return (
		// Component.js
		<div className="page-container">
			<div className="card-container">
				{data.map(item => (
					<Link key={data.id} to={`/product/${item.id}`} className="link-style">
						<img
							src={item.cover}
							alt="Image Appartement à louer"
							className="card-image"
						/>
						<p className="card-title">{item.title}</p>
					</Link>
				))}
			</div>
		</div>
	);
};
