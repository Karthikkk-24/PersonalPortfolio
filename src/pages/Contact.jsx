import FormInput from '../components/FormInput';

export default function Contact() {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-4">
            <div>

            </div>
            <h1 className="text-3xl text-white">Contact Form</h1>
            <div className="w-full h-auto grid grid-cols-2 gap-6">
                <FormInput title="Name" type="text" />
                <FormInput title="Email" type="email" />
                <FormInput title="Phone" type="tel" />
                <FormInput title="Subject" type="text" />
                <FormInput title="Message" type="textarea" />
            </div>
            <button className="w-20 h-10 bg-primary font-semibold text-background rounded-lg">
                Submit
            </button>
        </div>
    );
}
