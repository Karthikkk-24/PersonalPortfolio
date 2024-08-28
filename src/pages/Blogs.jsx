import Card from '../components/Card';

export default function Blogs() {
    return (
        <div className="w-full h-full overflow-y-auto px-7 py-5">
            <div className="w-full h-auto grid grid-cols-3 place-items-center justify-items-center gap-10">
                <Card
                    image="/logo/1.png"
                    title="Prompt Genie"
                    date="01.01.2022"
                    url="/some-page"
                    description="Card Description"
                />
                <Card
                    image="/logo/1.png"
                    title="Budget Buddy"
                    date="01.01.2022"
                    url="/some-page"
                    description="Card Description"
                />
                <Card
                    image="/logo/1.png"
                    title="Care Connect Next"
                    date="01.01.2022"
                    url="/some-page"
                    description="Card Description"
                />
                <Card
                    image="/logo/1.png"
                    title="Care Connect"
                    date="01.01.2022"
                    url="/some-page"
                    description="Card Description"
                />
                <Card
                    image="/logo/1.png"
                    title="Connect Reconnect"
                    date="01.01.2022"
                    url="/some-page"
                    description="Card Description"
                />
                <Card
                    image="/logo/1.png"
                    title="Code Knight"
                    date="01.01.2022"
                    url="/some-page"
                    description="Card Description"
                />
                <Card
                    image="/logo/1.png"
                    title="Domain Checker"
                    date="01.01.2022"
                    url="/some-page"
                    description="Card Description"
                />
                <Card
                    image="/logo/1.png"
                    title="SneakerHead"
                    date="01.01.2022"
                    url="/some-page"
                    description="Card Description"
                />
                <Card
                    image="/logo/1.png"
                    title="YouTube Portfolio"
                    date="01.01.2022"
                    url="/some-page"
                    description="Card Description"
                />
            </div>
        </div>
    );
}
