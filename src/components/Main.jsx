import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Main() {
    return (
        <div className='flex'>
            <Navbar />
            <Banner />
            <Footer />
        </div>
    );
}
