import emptyStar from '../assets/images/emptyStar.svg';
import fullStar from '../assets/images/fullStar.svg';
import '../../style/Rating.scss';
const Rating = ({ product }) => {
	// const stars = [];

	return (
		<div className="rating-container">
			<p>rating</p>
			{product ? <img src={fullStar} /> : <img src={emptyStar} />}
		</div>
	);
};

export default Rating;
