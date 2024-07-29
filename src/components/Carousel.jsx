/* eslint-disable react/prop-types */
import chevron from '../assets/images/chevron.svg';
import '../../style/Carousel.scss';
import { useState } from 'react';
const Carousel = ({ picture, title }) => {
	const [currentIndex, setcurrentIndex] = useState(0);

	const handlePreviousClick = () => {
		const newIndex = currentIndex === 0 ? picture.length - 1 : currentIndex - 1;
		setcurrentIndex(newIndex);
	};

	const handleNextClick = () => {
		const newIndex = currentIndex === picture.length - 1 ? 0 : currentIndex + 1;
		setcurrentIndex(newIndex);
	};
	return (
		<div className="image-container">
			<img src={picture[currentIndex]} alt={title} className="image-product" />

			{picture.length > 1 ? (
				<div>
					<img
						src={chevron}
						alt="Left-Arrow"
						className="left-arrow"
						onClick={handlePreviousClick}
					/>
					<img
						src={chevron}
						alt="Right-Arrow"
						className="right-arrow"
						onClick={handleNextClick}
					/>
					<p className="picture-counter">
						{currentIndex + 1} / {picture.length}
					</p>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Carousel;
