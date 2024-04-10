import Banner from './Banner';
import bannerImage from '../assets/images/home_image.png';
import { Card } from './Card';
const Home = () => {
	return (
		<div className="container-home">
			<Banner imgSrc={bannerImage} text="Chez vous, partout et ailleurs" />
			<Card />
		</div>
	);
};

export default Home;
