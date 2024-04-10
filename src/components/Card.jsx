import '../../style/Card.scss';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
export const Card = () => {
	return (
		<div className="card-container">
			{data.map(item => {
				return (
					<Link key={data.id} className="cardItem" to={`/product/${item.id}`}>
						{/* <h2>{data.title}</h2> */}
						{/* <img src={imgCard} alt={data.title} /> */}
						<p className="card-title">{item.title}</p>
					</Link>
				);
			})}
		</div>
	);
};
