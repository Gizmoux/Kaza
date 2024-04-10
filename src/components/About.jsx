import Banner from './Banner';
import bannerImage from '../assets/images/about_image.png';
import '../../style/AboutData.scss';
const About = ({ imgSrc }) => {
	const aboutDatas = [
		{
			id: '1',
			title: 'Fiabilité',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			id: '2',
			title: 'Respect',
			content: 'Dolor magna eget est lorem ipsum dolor sit amet consectetur.',
		},
		{
			id: '3',
			title: 'Service',
			content:
				'Purus gravida quis blandit turpis cursus in hac habitasse. Adipiscing elit pellentesque habitant morbi tristique senectus et.',
		},
		{
			id: '4',
			title: 'Responsabilité',
			content:
				'Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Consequat mauris nunc congue nisi vitae suscipit tellus.',
		},
	];
	return (
		<div>
			<div>
				<Banner imgSrc={bannerImage} />
			</div>
			<div>
				{aboutDatas.map((data, index) => {
					return (
						<div key={index} className="about-data">
							{data.title}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default About;
