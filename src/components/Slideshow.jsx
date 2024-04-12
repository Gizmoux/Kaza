import chevron from '../assets/images/chevron.svg';
import '../../style/Slideshow.scss';
import { useState } from 'react';
const Slideshow = ({ picture, title }) => {
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
		<div>
			<img src={picture[currentIndex]} alt={title} className="image-product" />
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
		</div>
	);
};

export default Slideshow;
