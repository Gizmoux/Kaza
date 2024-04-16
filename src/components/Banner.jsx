import '../../style/Banner.scss';
const Banner = ({ imgSrc, text }) => {
	return (
		<div className="banner-container">
			<h1 className="banner-text">{text}</h1>
			<img src={imgSrc} alt="Image" className="banner-image" />
		</div>
	);
};

export default Banner;
