import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavbarItem({ title, link }) {
    return (
        <NavLink
            className="text-primary font-semibold"
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
