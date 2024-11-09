import './internship.css';
const Internship = ({ job }) => {
    console.log(job);  // This will show the job object in the console

    return (
        <div className="job-card">
            <img src={job.logo} alt={job.title} className="job-logo" />
            <h3>{job.title}</h3>
            <a href={job.applyLink} className="apply-btn" target="_blank" rel="noopener noreferrer">
                Apply Now
            </a>
        </div>
    );
};

export default Internship;
