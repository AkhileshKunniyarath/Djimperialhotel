import FadeIn from './FadeIn';
import './Facilities.css';

const facilities = [
    { icon: '🛏️', title: '15 Luxury Suites', desc: 'Spacious, modern, well-appointed rooms' },
    { icon: '🍽️', title: 'Complimentary Breakfast', desc: 'Daily breakfast included in your stay' },
    { icon: '🍴', title: 'In-House Restaurant', desc: 'Food Book — open all day' },
    { icon: '📶', title: 'Free High-Speed WiFi', desc: 'Reliable internet throughout the property' },
    { icon: '🚗', title: 'Spacious Parking', desc: 'Ample secure parking on premises' },
    { icon: '🐾', title: 'Pet Friendly', desc: 'We welcome your furry companions' },
    { icon: '🕐', title: '24/7 Front Desk', desc: 'Round-the-clock assistance' },
    { icon: '✈️', title: 'Airport & Railway Nearby', desc: 'Easy access to transport hubs' },
];

export default function Facilities() {
    return (
        <section id="facilities" className="facilities">
            <div className="container">
                <FadeIn delay={100} direction="up">
                    <div className="facilities-header">
                        <h2 className="section-title">Facilities & Amenities</h2>
                        <p className="section-subtitle">
                            Everything you need for a comfortable and memorable stay at DJ Imperial Suites.
                        </p>
                    </div>
                </FadeIn>

                <div className="facilities-layout">
                    {facilities.map((item, i) => (
                        <FadeIn key={i} delay={(i % 4) * 100} direction="up">
                            <div className="facility-item">
                                <div className="facility-icon-wrap">
                                    <span className="facility-icon">{item.icon}</span>
                                </div>
                                <div className="facility-content">
                                    <h4 className="facility-title">{item.title}</h4>
                                    <p className="facility-desc">{item.desc}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
