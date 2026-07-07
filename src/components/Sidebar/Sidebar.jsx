export default function Sidebar() {
    return (
        <aside className="sidebar">
            {/* Avatar */}
            <div className="avatar-wrapper">
              <img src="/profile.png" alt="Saba Batool" />
            </div>

            <div className="sidebar-name">Saba Batool</div>
            <div className="sidebar-title">CS Student & Developer</div>

            {/* Social Links */}
            <div className="social-links">
                <a href="https://github.com/saba374" target="_blank" rel="noreferrer" title="GitHub">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.11.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.84a9.4 9.4 0 0 1 2.51.34c1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.63 1.03 2.74 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.19 10.19 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/saba-batool-985aa8339/" target="_blank" rel="noreferrer" title="LinkedIn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-5a2 2 0 0 1 0 4 2 2 0 0 1 0-4z" />
                    </svg>
                </a>

                <a href="mailto:sababatool062006@gmail.com" title="Email">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 7L4 6v12h16V6l-8 5z" />
                    </svg>
                </a>
            </div>

            {/* Info Card */}
            <div className="info-card">
                <div className="info-item">
                    <span className="info-icon">📱</span>
                    <div>
                        <div className="info-label">Phone</div>
                        <div className="info-value">03117222775</div>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">✉️</span>
                    <div>
                        <div className="info-label">Email</div>
                        <div className="info-value">sababatool062006@gmail.com</div>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">🎓</span>
                    <div>
                        <div className="info-label">University</div>
                        <div className="info-value">FJWU Rawalpindi</div>
                    </div>
                </div>
                <div className="info-item">
                    <span className="info-icon">📍</span>
                    <div>
                        <div className="info-label">Location</div>
                        <div className="info-value">Rawalpindi, Pakistan</div>
                    </div>
                </div>
            </div>

            {/* Download Resume */}
            <button className="download-btn" onClick={() => window.print()}>
                ⬇️ Download Resume
            </button>
        </aside>
    );
}
