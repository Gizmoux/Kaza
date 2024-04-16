import emptyStar from '../assets/images/emptyStar.svg';
import fullStar from '../assets/images/fullStar.svg';
import { useState, useEffect } from 'react';
import '../../style/Rating.scss';
const Rating = ({ rating }) => {
	const [stars, setStars] = useState([emptyStar]);
	// Je prend mon rating, si rationg = 1, je rempli 1 étoile sur les 5

	useEffect(() => {
		let newStar = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				newStar.push(fullStar);
			} else {
				newStar.push(emptyStar);
			}
		}
		setStars(newStar);
	}, [rating]);
	return (
		<div className="rating-container">
			{stars.map((star, index) => {
				return (
					<div key={index} className="stars">
						<img src={star} alt="star" className="star-color" />
					</div>
				);
			})}
		</div>
	);
};

export default Rating;
