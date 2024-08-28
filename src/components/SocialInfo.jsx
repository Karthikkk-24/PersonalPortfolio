import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SocialInfo({ icon, url, title }) {
    return (
        <Link to={url} className="w-full h-12 grid grid-cols-4 gap-8">
            <div className="col-span-1 bg-onyx h-full w-12 flex items-center justify-center aspect-square rounded-xl text-primary text-xl neo-shadow">
                {icon}
            </div>
            <div className="col-span-3 flex items-center justify-start">
                <h4 className="text-white text-base font-semibold">{title}</h4>
            </div>
        </Link>
    );
}

SocialInfo.propTypes = {
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
