import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavItem({ title, path, active }) {
    return (
        <Link
            to={path}
            className={`w-full ${
                active ? 'bg-slate-100 text-black' : 'text-white'
            } flex items-center justify-start text-xl`}
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
