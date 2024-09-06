import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CustomButton({ title = '', url = '', icon = '' }) {
    return (
        <Link
            to={url}
            className="w-auto h-10 bg-primary font-semibold text-background px-5 py-2 rounded-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
        >
            {title} {icon ? icon : ''}
        </Link>
    );
}

CustomButton.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
};
