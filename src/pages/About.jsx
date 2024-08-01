import Banner from '../components/Banner';
import bannerImage from '../assets/images/about_image.png';
import Collapse from '../components/Collapse';
import '../../style/About.scss';
const About = () => {
	const aboutDatas = [
		{
			id: '1',
			title: 'Fiabilité',
			content:
				'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
		},
		{
			id: '2',
			title: 'Respect',
			content:
				'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
		},
		{
			id: '3',
			title: 'Service',
			content:
				'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
		},
		{
			id: '4',
			title: 'Responsabilité',
			content:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
		},
	];
	return (
		<div>
			<div>
				<Banner imgSrc={bannerImage} />
			</div>
			<div className="about-collapse">
				{aboutDatas.map((data, index) => {
					return (
						<Collapse title={data.title} content={data.content} key={index} />
					);
				})}
			</div>
		</div>
	);
};

export default About;
