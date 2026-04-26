const EDUCATION = [
    { year: '2024 – Present', role: 'BS Computer Science', place: 'Fatima Jinnah Women University, Rawalpindi (4th Semester)' },
    { year: '2022 – 2023', role: 'Intermediate (FSc Pre-Engineering)', place: 'FBISE, City Okara Cantt' },
    { year: '2020 – 2021', role: 'Matriculation', place: 'FBISE, City Okara Cantt' },
];

const EXPERIENCE = [
    { year: '2024 – Present', role: 'CS Student Researcher', place: 'Fatima Jinnah Women University' },
    { year: '2023', role: 'Java & OOP Foundations', place: 'Academic Projects' },
    { year: '2022', role: 'Engineering Fundamentals', place: 'Academic Foundations' },
];

const WORK_SKILLS = ['SQL', 'Java', 'C++', 'OOP', 'Data Structures', 'Assembly', 'Algorithms', 'Git', 'HTML/CSS'];
const SOFT_SKILLS = ['Problem Solving', 'Critical Thinking', 'Communication', 'Time Management', 'Teamwork', 'Adaptability'];

export default function Resume() {
    return (
        <>
            <h2 className="section-title">Resume</h2>
            <div className="resume-grid">
                {/* Education */}
                <div>
                    <div className="resume-section-title">🎓 Education</div>
                    {EDUCATION.map(e => (
                        <div className="timeline-item" key={e.role}>
                            <div className="timeline-year">{e.year}</div>
                            <div className="timeline-role">{e.role}</div>
                            <div className="timeline-place">{e.place}</div>
                        </div>
                    ))}
                </div>

                {/* Experience */}
                <div>
                    <div className="resume-section-title">💼 Experience</div>
                    {EXPERIENCE.map(e => (
                        <div className="timeline-item" key={e.role}>
                            <div className="timeline-year">{e.year}</div>
                            <div className="timeline-role">{e.role}</div>
                            <div className="timeline-place">{e.place}</div>
                        </div>
                    ))}
                </div>

                {/* Work Skills */}
                <div>
                    <div className="resume-section-title">🛠️ Work Skills</div>
                    <div className="tags-wrap">
                        {WORK_SKILLS.map(s => <span className="tag" key={s}>{s}</span>)}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <div className="resume-section-title">💡 Soft Skills</div>
                    <div className="tags-wrap">
                        {SOFT_SKILLS.map(s => <span className="tag" key={s}>{s}</span>)}
                    </div>
                </div>
            </div>
        </>
    );
}
