import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card({ image, title, buttonText, buttonUrl }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="w-full rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 h-96 flex flex-col overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                />
                <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold mb-4">{title}</h2>
                    <Link to={buttonUrl} className="mt-auto">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                            {buttonText}
                        </button>
                    </Link>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative">
                        <img
                            src={image}
                            alt={title}
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonUrl: PropTypes.string.isRequired,
};
