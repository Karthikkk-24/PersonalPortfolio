import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CustomButton({ title, url }) {
    return (
        <Link to={url} className="w-auto h-10 bg-primary font-semibold text-background px-5 py-2 rounded-lg hover:scale-105 transition-all">
            {title}
        </Link>
    );
}

CustomButton.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
};