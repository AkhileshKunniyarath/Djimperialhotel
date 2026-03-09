import './About.css';
import FadeIn from './FadeIn';
import CountUp from './CountUp';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-content">
                    <FadeIn delay={100} direction="up">
                        <h2 className="section-title">About DJ Imperial Suites</h2>
                    </FadeIn>

                    <FadeIn delay={200} direction="up">
                        <div className="about-text-wrap">
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
                        </div>
                    </FadeIn>

                    <div className="about-stats">
                        <FadeIn delay={300} direction="up" className="stat-item">
                            <h3 className="stat-num"><CountUp end={15} duration={2500} suffix="+" /></h3>
                            <span className="stat-label">Luxury Suites</span>
                        </FadeIn>
                        <FadeIn delay={400} direction="up" className="stat-item">
                            <h3 className="stat-num"><CountUp end={24} duration={2500} suffix="/7" /></h3>
                            <span className="stat-label">Room Service</span>
                        </FadeIn>
                        <FadeIn delay={500} direction="up" className="stat-item">
                            <h3 className="stat-num"><CountUp end={10} duration={2500} suffix="m" /></h3>
                            <span className="stat-label">From City Center</span>
                        </FadeIn>
                    </div>
                </div>

                <div className="about-image-wrapper">
                    <FadeIn delay={200} direction="left" className="about-img-main"></FadeIn>
                    <FadeIn delay={400} direction="right" className="about-img-sub float-anim"></FadeIn>
                </div>
            </div>
        </section>
    );
}
