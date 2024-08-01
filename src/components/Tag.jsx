/* eslint-disable react/prop-types */
import '../../style/Tag.scss';
const Tag = ({ product }) => {
	return (
		<div className="tag-fill">
			<p className="tag">{product}</p>
		</div>
	);
};

export default Tag;
