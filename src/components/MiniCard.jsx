import PropTypes from 'prop-types';

export default function MiniCard({ image = '', title = '', url = '', date = '', description = '' }) {

    return (
        <>
            <a href={url} target="_blank" className="w-full rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-[1px] border-onyx h-auto flex flex-col overflow-hidden group cursor-pointer">
                <div className='w-full h-80 overflow-hidden'>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full hover:scale-105 object-cover cursor-pointer transition-all duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="p-4 flex h-36 flex-col flex-grow">
                    <h5 className="text-sm text-gray-500 mb-2">{date}</h5>
                    <h2 className="text-xl text-white group-hover:text-primary font-semibold mb-4">{title}</h2>
                    <p className='text-sm text-gray-300 hidden'>
                        {description}
                    </p>
                </div>
            </a>
        </>
    );
}

MiniCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
