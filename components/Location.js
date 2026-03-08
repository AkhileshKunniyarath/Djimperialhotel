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
                                <p>Sankar Rd, Sasthamangalam<br />Thiruvananthapuram<br />Kerala 695010</p>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.4012338088767!2d76.95124117374754!3d8.509804691540682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be90da07cf85%3A0x54e6e0a5f35ce3d5!2sSasthamangalam%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
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
