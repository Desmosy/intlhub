
const Learn = ({ learnTrack }) => {

  return (
    <div className="track-card">
      <img src={learnTrack.img} alt={learnTrack.title}/>
      <h3>{learnTrack.title}</h3>
      
    </div>
  );
};

export default Learn;
