import CustomButton from "./CustomButton";

export default function CallToAction() {
    return (
        <div className="w-full h-auto flex items-center justify-between">
            <CustomButton title="Download CV" url="/download" />
            <CustomButton title="Hire me" url="/contact" />
            <CustomButton title="Contact me" url="/contact" />
        </div>
    );
}
