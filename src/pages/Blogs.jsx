import Card from '../components/Card';

export default function Blogs() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start bg-background rounded-3xl p-10">
            <div className="w-full h-auto grid grid-cols-4 place-items-center justify-items-center gap-10">
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
