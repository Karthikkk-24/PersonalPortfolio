import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavItem({ title, path, active }) {
    return (
        <Link
            to={path}
            className={`w-full h-10 ${
                active ? 'text-primary font-semibold rounded-lg' : 'text-white'
            } flex items-center justify-center text-base`}
        >
            {title}
        </Link>
    );
}

NavItem.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    active: PropTypes.bool,
};

NavItem.defaultProps = {
    title: '',
    path: '',
    active: false,
};
