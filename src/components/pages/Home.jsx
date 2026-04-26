const SKILLS = [
    {
        icon: '📊',
        title: 'SQL & Databases',
        desc: 'Designing and managing relational databases, writing complex queries, and ensuring data integrity using SQL.',
    },
    {
        icon: '☕',
        title: 'Java Programming',
        desc: 'Developing robust object-oriented applications with Java, applying OOP principles and design patterns.',
    },
    {
        icon: '⚙️',
        title: 'C++ Engineering',
        desc: 'Writing efficient, low-level programs with C++, including data structures implementation and algorithmic problem solving.',
    },
    {
        icon: '🎓',
        title: 'Academic Learning',
        desc: 'Currently in 4th semester at Fatima Jinnah Women University, continuously expanding knowledge in computer science.',
    },
];

export default function Home() {
    return (
        <>
            <h1 className="section-title">About Me</h1>
            <p className="about-desc">
                Hi there! I'm <span className="sidebar-name">Saba Batool</span>, a passionate Computer Science student at{' '}
                <strong>Fatima Jinnah Women University, Rawalpindi</strong>. Currently in my 4th semester
                of BSCS, I am dedicated to learning and applying programming skills across multiple
                languages including SQL, Java, and C++. I thrive on solving complex problems and
                constantly strive to enhance my skills in the ever-evolving world of technology.
            </p>

            <div className="what-i-do-title">What I Do!</div>
            <div className="skills-grid">
                {SKILLS.map(s => (
                    <div className="skill-card" key={s.title}>
                        <div className="skill-card-header">
                            <span className="skill-icon">{s.icon}</span>
                            <span className="skill-card-title">{s.title}</span>
                        </div>
                        <p className="skill-card-desc">{s.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
