const PROJECTS = [
    {
        lang: 'C',
        icon: '🎮',
        title: 'Tic Tac Toe',
        desc: 'A classic Tic Tac Toe game implemented in C, featuring a clean console interface and logical game flow.',
        link: 'https://github.com/saba374/TicTacToe-C-Project',
    },
    {
        lang: 'Java & SQL',
        icon: '🍽️',
        title: 'Restaurant Management System',
        desc: 'A comprehensive system developed using Java OOP principles and SQL for database management, handling orders and inventory.',
        link: 'https://github.com/saba374/restaurant-management-system',
    },
    {
        lang: 'Assembly',
        icon: '📟',
        title: '4-Input Logic Gate Evaluator',
        desc: 'A low-level project built with Assembly language to evaluate and simulate 4-input logic gates.',
        link: 'https://github.com/saba374/Logic-Gate-Evaluator-8086',
    },
    {
        lang: 'C++',
        icon: '🌳',
        title: 'Quad Tree Spatial Indexing',
        desc: 'A sophisticated spatial indexing system implemented in C++ as part of Data Structures, optimized for spatial data queries.',
        link: 'https://github.com/saba374/QuadTree-Spatial-Indexing-System',
    },
];

export default function Work() {
    return (
        <>
            <h2 className="section-title">My Work</h2>
            <div className="projects-grid">
                {PROJECTS.map(p => (
                    <div className="project-card" key={p.title}>
                        <div className="project-lang-badge">
                            <span>{p.icon}</span> {p.lang}
                        </div>
                        <div className="project-title">{p.title}</div>
                        <p className="project-desc">{p.desc}</p>
                        <a 
                            href={p.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-link"
                        >
                            🔗 View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}
