import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavbarItem({ title, link }) {
    return (
        <NavLink
            className="text-primary font-semibold after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:block after:transition-all after:duration-300"
            activeClassName="active"
            to={link}
        >
            {title}
        </NavLink>
    );
}

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
