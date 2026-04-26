const NAV_ICONS = {
    Home: '🏠',
    Resume: '📄',
    Work: '💼',
    Contact: '👤',
};

export default function Navbar({ pages, active, onSelect }) {
    return (
        <nav className="navbar">
            {pages.map(page => (
                <button
                    key={page}
                    className={`nav-btn${active === page ? ' active' : ''}`}
                    onClick={() => onSelect(page)}
                    id={`nav-${page.toLowerCase()}`}
                >
                    <span className="nav-icon">{NAV_ICONS[page]}</span>
                    {page}
                </button>
            ))}
        </nav>
    );
}
