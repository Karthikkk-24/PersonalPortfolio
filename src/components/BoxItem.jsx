import PropTypes from 'prop-types';

export default function BoxItem({ title = '', icon = '' }) {
    return (
        <div className="rounded-2xl h-32 w-full neo-shadow flex items-center justify-start border-2 border-onyx p-5 gap-6">
            <div className="w-1/5 h-full flex items-center justify-center bg-slate-50 p-5 rounded-2xl">
                <img src={icon} className='h-24 w-auto' alt="" />
            </div>
            <div className="w-4/5 h-full flex flex-col items-start justify-center gap-3">
                <h1 className="text-2xl text-white font-bold">{title}</h1>
            </div>
        </div>
    );
}

BoxItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object,
};
