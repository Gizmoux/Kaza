import footer from '../assets/images/footer.png';
import '../../style/Footer.scss';
const Footer = () => {
	return (
		<div className="container-footer">
			<img src={footer} alt="Footer" />
			<p className="footer-rights">@ 2020 Kasa. All rights reserved</p>
		</div>
	);
};
export default Footer;
