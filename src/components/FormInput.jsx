import PropTypes from 'prop-types';

export default function FormInput({ title, type }) {
    const generateInput = (type) => {
        switch (type) {
            case 'text':
                return (
                    <input
                        type={type}
                        className="w-full h-10 p-2 border-[1px] border-slate-800 rounded-lg bg-background text-slate-200 focus:outline-none"
                    />
                );
            case 'textarea':
                return (
                    <textarea className="w-full p-2 border-[1px] border-slate-800 rounded-lg bg-background text-slate-200 focus:outline-none" />
                );
            default:
                return (
                    <input
                        type={type}
                        className="w-full h-10 p-2 border-[1px] border-slate-800 rounded-lg bg-background text-slate-200 focus:outline-none"
                    />
                );
        }
    };

    return (
        <div className="flex flex-col w-full h-auto items-start justify-start gap-2">
            <label htmlFor={title} className="text-white font-bold">
                {title}
            </label>
            {generateInput(type)}
        </div>
    );
}

FormInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
};
