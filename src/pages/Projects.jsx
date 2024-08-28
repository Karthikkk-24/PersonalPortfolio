import Card from '../components/Card';

export default function Projects() {
    return (
        <div className="w-full h-full">
            <div className="w-full h-auto grid grid-cols-2 place-items-center justify-items-center gap-10">
                <Card
                    image="/logo/1.png"
                    title="Card Title"
                    buttonText="Learn More"
                    buttonUrl="/some-page"
                />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
