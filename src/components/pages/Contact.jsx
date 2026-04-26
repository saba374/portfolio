import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

    const submit = e => {
        e.preventDefault();
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <>
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-grid">
                {/* Info */}
                <div className="contact-info-section">
                    <h3>Get In Touch</h3>
                    <a className="contact-item" href="tel:03117222775">
                        <span className="contact-item-icon">📱</span>
                        <div className="contact-item-text">
                            <p>Phone</p>
                            <span>03117222775</span>
                        </div>
                    </a>
                    <a className="contact-item" href="mailto:sababatool062006@gmail.com">
                        <span className="contact-item-icon">✉️</span>
                        <div className="contact-item-text">
                            <p>Email</p>
                            <span>sababatool062006@gmail.com</span>
                        </div>
                    </a>
                    <div className="contact-item">
                        <span className="contact-item-icon">📍</span>
                        <div className="contact-item-text">
                            <p>Location</p>
                            <span>Rawalpindi, Pakistan</span>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="contact-item-icon">🎓</span>
                        <div className="contact-item-text">
                            <p>University</p>
                            <span>Fatima Jinnah Women University</span>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="contact-form-section">
                    <h3>Send a Message</h3>
                    {sent && (
                        <div style={{ background: '#d1fae5', color: '#065f46', padding: '10px 14px', borderRadius: '8px', marginBottom: '12px', fontSize: '.85rem' }}>
                            ✅ Message sent! I'll get back to you soon.
                        </div>
                    )}
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input id="name" name="name" type="text" placeholder="e.g. Ahmed Ali" value={form.name} onChange={handle} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handle} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Write your message here..." value={form.message} onChange={handle} required />
                        </div>
                        <button type="submit" className="send-btn">✉️ Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
}
