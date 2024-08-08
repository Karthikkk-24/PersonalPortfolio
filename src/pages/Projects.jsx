import Card from '../components/Card';

export default function Projects() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start bg-background rounded-3xl p-10">
            <div className="w-full h-auto grid grid-cols-3 place-items-center justify-items-center">
                <Card />
            </div>
        </div>
    );
}
