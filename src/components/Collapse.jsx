import '../../style/Collapse.scss';
import { useState } from 'react';
import chevron from '../assets/images/chevron.svg';
const Collapse = ({ title, content, children }) => {
	const [isCollapseOpen, setIsCollapseOpen] = useState(false);
	const handleCollapse = () => {
		setIsCollapseOpen(!isCollapseOpen);
	};
	return (
		<div className="main-collapse-container">
			<div className="collapse-container" onClick={handleCollapse}>
				<h1>{title}</h1>
				<img
					src={chevron}
					alt="Arrow"
					className={isCollapseOpen ? 'chevron-down' : 'chevron-up'}
				/>
			</div>
			{isCollapseOpen ? (
				<p className="collapse-content">
					{content} {children}
				</p>
			) : (
				''
			)}
		</div>
	);
};

export default Collapse;
