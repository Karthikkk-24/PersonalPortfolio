import NameCard from '../components/NameCard';
import Navbar from '../components/Navbar';
import Space from '../components/Space';

export default function Homepage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start bg-background rounded-3xl p-10">
            <Navbar />
            <NameCard />
            <Space />
        </div>
    );
}
