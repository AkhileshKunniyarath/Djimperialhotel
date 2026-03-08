import Link from 'next/link';
import './Hero.css';

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content animate-fade-in">
                <h1 className="hero-title">
                    DJ Imperial Suites
                    <span className="hero-subtitle">Luxury Stay in Sasthamangalam</span>
                </h1>
                <p className="hero-text">15 Luxury Suites with In-House Restaurant</p>

                <div className="hero-highlights">
                    <span className="highlight">✓ Complimentary Breakfast</span>
                    <span className="highlight">✓ Free Wifi</span>
                    <span className="highlight">✓ Spacious Parking</span>
                    <span className="highlight">✓ Airport & Railway Station Nearby</span>
                </div>

                <div className="hero-buttons">
                    <Link href="#suites" className="btn btn-primary">Book a Room</Link>
                    <Link href="#restaurant" className="btn btn-outline hero-btn-outline">Explore Restaurant</Link>
                </div>
            </div>
        </section>
    );
}
