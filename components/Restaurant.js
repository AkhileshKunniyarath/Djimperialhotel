import Link from 'next/link';
import FadeIn from './FadeIn';
import './Restaurant.css';

export default function Restaurant() {
    const dishes = [
        { icon: '🍛', name: 'North Indian', desc: 'Rich curries, biryanis & breads' },
        { icon: '🥘', name: 'South Indian', desc: 'Traditional Kerala & Tamil flavors' },
        { icon: '🍜', name: 'Chinese', desc: 'Authentic fried rice, noodles & more' },
        { icon: '☕', name: 'Breakfast', desc: 'Complimentary spread every morning' },
    ];

    return (
        <section id="restaurant" className="restaurant">
            <div className="restaurant-overlay"></div>
            <div className="container restaurant-inner">
                <FadeIn delay={100} direction="up">
                    <div className="restaurant-badge">Food Book Restaurant</div>
                    <h2 className="section-title restaurant-title">A Fresh Dining Experience</h2>
                    <p className="section-subtitle restaurant-text">
                        Food Book Restaurant offers a delicious dining experience with a wide range of North Indian,
                        South Indian, and Chinese dishes. Whether you&apos;re staying at the suites or visiting for a meal,
                        our restaurant ensures quality food and a welcoming atmosphere.
                    </p>
                </FadeIn>

                <div className="cuisine-grid">
                    {dishes.map((dish, i) => (
                        <FadeIn key={i} delay={(i % 4) * 100} direction="up">
                            <div className="cuisine-card">
                                <span className="cuisine-icon">{dish.icon}</span>
                                <h4>{dish.name}</h4>
                                <p>{dish.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={200} direction="up">
                    <div className="restaurant-cta-buttons">
                        <Link href="#contact" className="btn">Reserve a Table</Link>
                        <Link href="tel:9995703313" className="btn btn-outline resto-outline">Call Us</Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
