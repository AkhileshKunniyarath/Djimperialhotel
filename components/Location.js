import './Location.css';

export default function Location() {
    return (
        <section id="location" className="location">
            <div className="container">
                <h2 className="section-title">Our Location</h2>
                <p className="section-subtitle">
                    Perfectly situated in the heart of Sasthamangalam — close to everything that matters.
                </p>

                <div className="location-grid">
                    <div className="location-info">
                        <div className="address-block">
                            <div className="address-icon">📍</div>
                            <div>
                                <h4>Address</h4>
                                <a
                                    href="https://maps.google.com/maps?q=DJ+Imperial+Suites,+Sankar+Rd,+Sasthamangalam,+Thiruvananthapuram,+Kerala+695010"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'block', marginTop: '0.4rem' }}
                                >
                                    DJ Imperial Suites, Sankar Rd, Sasthamangalam<br />Thiruvananthapuram, Kerala 695010
                                </a>
                            </div>
                        </div>
                        <div className="address-block">
                            <div className="address-icon">📞</div>
                            <div>
                                <h4>Phone</h4>
                                <a href="tel:9995703313">9995 70 3313</a><br />
                                <a href="tel:9995803313">9995 80 3313</a>
                            </div>
                        </div>
                        <div className="address-block">
                            <div className="address-icon">✉️</div>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:djimperialsuites@gmail.com">djimperialsuites@gmail.com</a>
                            </div>
                        </div>

                        <div className="nearby-highlights">
                            <h4>Nearby</h4>
                            <ul>
                                <li>🏙️ 10 mins from City Center</li>
                                <li>🚂 Nearby Railway Station</li>
                                <li>✈️ Nearby Airport</li>
                            </ul>
                        </div>
                    </div>

                    <div className="map-wrapper">
                        <iframe
                            src="https://maps.google.com/maps?q=DJ%20Imperial%20Suites,%20Sankar%20Rd,%20Sasthamangalam,%20Thiruvananthapuram,%20Kerala%20695010&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="DJ Imperial Suites Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
