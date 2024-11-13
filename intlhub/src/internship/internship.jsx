import './internship.css';

// Internship.jsx
// Internship.jsx
const Internship = ({ job }) => {
    return (
        <div className="job-card">
            <div className="trending-badge">
                🔥 Trending
            </div>
            <div className="salary-badge">
                💰 $50/hr
            </div>
            <img src={job.logo} alt={job.title} className="job-logo" />
            <h3>{job.title}</h3>
            <div className="tags-container">
                <span className="tag">⚡️ Remote</span>
                <span className="tag">🎯 Entry Level</span>
            </div>
            <a href={job.applyLink} className="apply-btn" target="_blank" rel="noopener noreferrer">
                Apply Now ✨
            </a>
        </div>
    );
};

export default Internship;