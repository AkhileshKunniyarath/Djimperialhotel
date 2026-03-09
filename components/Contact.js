'use client';
import './Contact.css';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const subject = `New Inquiry from ${name}`;
        const body = `Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}`;

        window.location.href = `mailto:djimperialsuites@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="contact">
            <div className="container contact-grid">
                <div className="contact-info">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Contact Us</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                        We&apos;d love to hear from you. Reach out for bookings, inquiries, or any questions.
                    </p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <div>
                                <strong>Phone</strong>
                                <a href="tel:9995703313">9995 70 3313</a>
                                <a href="tel:9995803313">9995 80 3313</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">✉️</span>
                            <div>
                                <strong>Email</strong>
                                <a href="mailto:djimperialsuites@gmail.com">djimperialsuites@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <div>
                                <strong>Address</strong>
                                <span>Sankar Rd, Sasthamangalam<br />Thiruvananthapuram, Kerala 695010</span>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Send a Message</h3>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
                    </div>
                    <button type="submit" className="btn form-submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}
