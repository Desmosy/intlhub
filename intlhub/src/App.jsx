import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  
import Learn from './Learn/learn';
import Hunt from './Hunt/hunt';
import Navbar from './Navbar';
import track from './learningtrack';
import jobsData from './jobsdata';
import Internship from './internship/internship';
import GamifiedList from './GamifiedLearningChecklist';
function App() {
  return (
    
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/hunt" element={<Hunt />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/gamifiedlist" element={<GamifiedList />} />
        </Routes>
        <h1>TRENDING INTERNSHIPS</h1>
        <div className='job-card-container'>
          {jobsData.map((job) => (
            <Internship key={job.id} job={job} />
          ))}
        </div>
        <h1>TRACKS</h1>
        <h4>Explore some free learning tracks from popular websites</h4>
        <div className='track-card-container'>
          {track.map((learnTrack) => (
            <div key={learnTrack.id}>
              <Learn learnTrack={learnTrack} />

              {learnTrack.title === "Computer Science" && (
                 //change  according to title link should be down below
                 <Link to="/gamifiedlist">  
                  <button>Start Checklist</button>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className='communities'>
          <h1>Communities You Should Consider Joining</h1>
        </div>
        <div className='resources'>
          <h1>Resources from</h1>
        </div>
      </>
    </Router>
   
  );
}

export default App;
