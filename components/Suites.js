import Link from 'next/link';
import './Suites.css';

const suitesData = [
    {
        id: 1,
        name: 'Deluxe Suite',
        description: 'Spacious modern room with premium bedding and smart TV.',
        image: '/images/suite-deluxe.jpg',
        features: ['Premium Bedding', 'Smart TV', 'Free WiFi', 'Complimentary Breakfast'],
    },
    {
        id: 2,
        name: 'Executive Suite',
        description: 'Perfect for business travelers with dedicated workspace and city views.',
        image: '/images/suite-executive.jpg',
        features: ['Work Desk', 'City View', 'Mini Bar', 'High-Speed WiFi'],
    },
    {
        id: 3,
        name: 'Family Suite',
        description: 'Extra spacious suite designed for comfortable family stays.',
        image: '/images/suite-family.jpg',
        features: ['Twin Beds Available', 'Living Area', 'Kid-friendly', 'Room Service'],
    }
];

export default function Suites() {
    return (
        <section id="suites" className="suites">
            <div className="container">
                <h2 className="section-title">Our Luxury Suites</h2>
                <p className="section-subtitle">
                    Experience supreme comfort in our 15 well-appointed luxury suites,
                    designed to cater to your every need.
                </p>

                <div className="suites-grid">
                    {suitesData.map((suite) => (
                        <div key={suite.id} className="suite-card">
                            <div
                                className="suite-image"
                                style={{ backgroundImage: `url(${suite.image})` }}
                                title={suite.name}
                            ></div>
                            <div className="suite-content">
                                <h3 className="suite-name">{suite.name}</h3>
                                <p className="suite-desc">{suite.description}</p>
                                <ul className="suite-features">
                                    {suite.features.map((feature, idx) => (
                                        <li key={idx}>✓ {feature}</li>
                                    ))}
                                </ul>
                                <div className="suite-footer">
                                    <Link href="#contact" className="btn btn-outline">Check Availability</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
