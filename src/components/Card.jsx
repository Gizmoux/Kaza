import '../../style/Card.scss';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
export const Card = () => {
	return (
		// Component.js
		<div className="page-container">
			<div className="card-container">
				{data.map(item => (
					<Link key={data.id} className="cardItem" to={`/product/${item.id}`}>
						<p className="card-title">{item.title}</p>
					</Link>
				))}
			</div>
		</div>
	);
};
