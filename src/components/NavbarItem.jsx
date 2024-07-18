import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavbarItem({ title, link, active, onClick }) {
    return (
        <NavLink
            className={`${
                active ? 'bg-slate-800' : ''
            } text-primary font-semibold after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:block after:transition-all after:duration-300 w-full h-12 flex items-center justify-center rounded-lg relative after:absolute after:bottom-0`}
            to={link}
            onClick={onClick}
        >
            {title}
        </NavLink>
    );
}

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};