import Link from 'next/link';
import FadeIn from './FadeIn';
import './Hero.css';

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-bg-anim"></div>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <FadeIn delay={0} direction="up">
                    <h1 className="hero-title shimmer-text">
                        DJ Imperial Suites
                    </h1>
                </FadeIn>
                <FadeIn delay={100} direction="up">
                    <span className="hero-subtitle">Luxury Stay in Sasthamangalam</span>
                </FadeIn>
                <FadeIn delay={200} direction="up">
                    <p className="hero-text">15 Luxury Suites with In-House Restaurant</p>
                </FadeIn>

                <FadeIn delay={300} direction="up">
                    <div className="hero-highlights">
                        <span className="highlight">✓ Complimentary Breakfast</span>
                        <span className="highlight">✓ Free Wifi</span>
                        <span className="highlight">✓ Spacious Parking</span>
                        <span className="highlight">✓ Airport & Railway Station Nearby</span>
                    </div>
                </FadeIn>

                <FadeIn delay={400} direction="up">
                    <div className="hero-buttons">
                        <Link href="#suites" className="btn btn-primary">Book a Room</Link>
                        <Link href="#restaurant" className="btn btn-outline hero-btn-outline">Explore Restaurant</Link>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
