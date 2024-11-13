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
        <div className='community'>COMMUNITIES</div>
        <div className='communities'>
 
  <div className="reddit">
    <img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" alt="Reddit Logo"/>
  </div>
  <div className="reddit">
    <img src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.png" alt="Discord Logo"/>
  </div>
  <div className="reddit">
    <img src="https://sue.eu/wp-content/uploads/sites/6/2022/11/github-logo-920x460-sue-v1.png" alt="Facebook Logo"/>
  </div>
  <div className="reddit">
    <img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" alt="FreeCodeCamp Logo"/>
  </div>
  <div className="reddit">
    <img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" alt="Reddit Logo"/>
  </div>
  <div className="reddit">
    <img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" alt="Reddit Logo"/>
  </div>
  <div className="reddit">
    <img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" alt="Reddit Logo"/>
  </div>
  <div className="reddit">
    <img src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png" alt="Reddit Logo"/>
  </div>

</div>

        <div className='resources'>
          <h1>Resources from</h1>
        </div>
      </>
    </Router>
   
  );
}

export default App;
