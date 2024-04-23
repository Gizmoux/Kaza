import errorImg from '../assets/images/404.png';
import { Link } from 'react-router-dom';
import '../../style/ErrorPage.scss';
export const ErrorPage = () => {
	return (
		<div className="error-container">
			<img src={errorImg} alt="Erreur 404" />
			<p>Oups! La page que vous demandez n'existe pas</p>
			<Link to={'/'}>Retournez sur la page d'accueil</Link>
		</div>
	);
};
