import './About.css';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="section-title">About DJ Imperial Suites</h2>
                    <div className="about-text">
                        <p>
                            DJ Imperial Suites offers premium accommodation in the heart of Sasthamangalam, Thiruvananthapuram.
                            With 15 well-designed luxury suites, modern amenities, and an in-house restaurant, we provide a
                            comfortable stay for business travelers, families, and tourists.
                        </p>
                        <p>
                            Experience the perfect blend of modern luxury and warm hospitality. Whether you're visiting for
                            business or leisure, our prime location provides easy access to the city center, while perfectly
                            shielding you from the hustle and bustle.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <h3>15+</h3>
                            <span>Luxury Suites</span>
                        </div>
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <span>Room Service</span>
                        </div>
                        <div className="stat-item">
                            <h3>10m</h3>
                            <span>From City Center</span>
                        </div>
                    </div>
                </div>
                <div className="about-image-wrapper">
                    {/* Placeholder image, to be replaced by actual interior/exterior */}
                    <div className="about-image"></div>
                </div>
            </div>
        </section>
    );
}
