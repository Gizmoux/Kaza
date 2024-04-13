import '../../style/Collapse.scss';
import { useState } from 'react';
import chevron from '../assets/images/chevron.svg';
const Collapse = ({ title, content }) => {
	const [isCollapseOpen, setIsCollapseOpen] = useState(false);
	const handleCollapse = () => {
		setIsCollapseOpen(!isCollapseOpen);
	};
	return (
		<div>
			<div className="collapse-container" onClick={handleCollapse}>
				<h1>{title}</h1>
				<img
					src={chevron}
					alt="Arrow"
					className={isCollapseOpen ? 'chevron-down' : 'chevron-up'}
				/>
			</div>
			{isCollapseOpen ? <p>{content} </p> : ''}
		</div>
	);
};

export default Collapse;
