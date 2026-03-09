import './Suites.css';
import FadeIn from './FadeIn';

const suitesData = [
    {
        id: 1,
        name: 'Deluxe Suite',
        description: 'Spacious modern room with premium bedding and smart TV. Designed for the perfect balance of relaxation and productivity.',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop', // Luxury bedroom
        features: ['Premium Bedding', 'Smart TV', 'Free WiFi', 'Complimentary Breakfast'],
    },
    {
        id: 2,
        name: 'Executive Suite',
        description: 'Perfect for business travelers with dedicated workspace and panoramic city views. Unwind in refined luxury after a long day of meetings.',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop', // Business suite
        features: ['Work Desk', 'City View', 'Mini Bar', 'High-Speed WiFi'],
    },
    {
        id: 3,
        name: 'Family Suite',
        description: 'Extra spacious, interconnected suite designed for comfortable family stays without compromising on five-star elegance and convenience.',
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop', // Spacious suite
        features: ['Twin Beds Available', 'Living Area', 'Kid-friendly', 'Room Service'],
    }
];

export default function Suites() {
    return (
        <section id="suites" className="suites">
            <div className="container">
                <FadeIn delay={100} direction="up">
                    <h2 className="section-title">Our Luxury Suites</h2>
                </FadeIn>
                <FadeIn delay={200} direction="up">
                    <p className="section-subtitle">
                        Experience supreme comfort in our 15 well-appointed luxury suites,
                        designed to cater to your every need.
                    </p>
                </FadeIn>

                <div className="suites-showcase">
                    {suitesData.map((suite, index) => (
                        <FadeIn key={suite.id} direction={index % 2 === 0 ? 'right' : 'left'} delay={100}>
                            <div className={`suite-editorial ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
                                <div className="suite-img-container">
                                    <div
                                        className="suite-image"
                                        style={{ backgroundImage: `url(${suite.image})` }}
                                        title={suite.name}
                                    ></div>
                                </div>
                                <div className="suite-content">
                                    <h3 className="suite-name">{suite.name}</h3>
                                    <p className="suite-desc">{suite.description}</p>
                                    <ul className="suite-features">
                                        {suite.features.map((feature, idx) => (
                                            <li key={idx}>✓ {feature}</li>
                                        ))}
                                    </ul>
                                    <div className="suite-footer">
                                        <a
                                            href={`https://wa.me/919995703313?text=${encodeURIComponent("Hello, I'd like to book the " + suite.name + " at DJ Imperial Suites.")}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-whatsapp"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
                                                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.82-.78.99-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2.02-1.25-.75-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.37.11-.49.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43-.15 0-.31-.01-.47-.01z" />
                                            </svg>
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
