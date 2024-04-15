import emptyStar from '../assets/images/emptyStar.svg';
import fullStar from '../assets/images/fullStar.svg';
import { useState } from 'react';
import '../../style/Rating.scss';
const Rating = ({ product }) => {
	const [stars, setStars] = useState(0);
	// Je prend mon rating, si rationg = 1, je rempli 1 étoile sur les 5

	return (
		<div className="rating-container">
			{/* <p>{product}</p> */}
			{product ? <img src={fullStar} /> : <img src={emptyStar} />}
		</div>
	);
};

export default Rating;
