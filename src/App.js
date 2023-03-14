
import { useState } from 'react';
import './App.css';
import Loading from './component/Loading';

function App() {

  // const [progress, setProgress] = useState(10);
  const [loading, setLoading] = useState(true);
  for (let i = 1; i <= 1; i++) {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }





  return (
    <div className="App">
      {loading ? <Loading /> :

        <h1>Welcome</h1>



      }

      {/* <div className='progress'>

        <Circle percent={progress} strokeWidth={2} strokeColor='lightblue' trailWidth={2} trailColor='blue' gapDegree={90} gapPosition='bottom' className='bar' />
        <p className='loading'>Loading...</p>

      </div> */}



    </div>
  );
}


export default App;
