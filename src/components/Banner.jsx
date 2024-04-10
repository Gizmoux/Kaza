import '../../style/Home.scss';
const Banner = ({ imgSrc, text }) => {
	return (
		<div>
			<h1>{text}</h1>

			<img src={imgSrc} alt="Image" className="banner-image" />
		</div>
	);
};

export default Banner;
