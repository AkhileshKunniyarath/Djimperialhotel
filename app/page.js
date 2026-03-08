import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Suites from '../components/Suites';
import Restaurant from '../components/Restaurant';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import BookingCTA from '../components/BookingCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <FadeIn><About /></FadeIn>
                <FadeIn><Suites /></FadeIn>
                <FadeIn><Restaurant /></FadeIn>
                <FadeIn><Facilities /></FadeIn>
                <FadeIn><Gallery /></FadeIn>
                <FadeIn><Location /></FadeIn>
                <FadeIn><BookingCTA /></FadeIn>
                <FadeIn><Contact /></FadeIn>
            </main>
            <Footer />
        </>
    );
}
