import logo from '../assets/images/logo.png';
import '../../style/Header.scss';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<>
			<div className="header">
				<img src={logo} alt="Logo Kasa" />
				<ul className="pages">
					<Link to={'/'} className="link">
						Accueil
					</Link>
					<Link to={'/about'} className="link">
						À propos
					</Link>
				</ul>
			</div>
		</>
	);
};
export default Header;
