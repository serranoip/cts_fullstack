import {useState, useEffect} from 'react'
import Nav from "../../Nav/Nav"
import "../styling/home.scss"

const Home = () => {
  const [date, setDate] = useState(new Date())

  function refreshClock() {
    setDate (new Date());
  }

  useEffect(() => {
    const timerID = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerID);
    }

  }, []);
  return (
    <div>
        <div>
          <Nav/>
        </div>
        <div className="flex flex-col h-screen" style={{backgroundImage:"url(/alta.png)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingTop: 5}} >
          <div className='summary'>
            <div className="absolute pl-5 bottom-2 h-20 w-full"> Locale Time: {date.toLocaleTimeString()}</div>
            <div className="absolute pl-5 bottom-2 h-14 w-full"> Time to next pass: {date.toLocaleTimeString()}</div>
            <div className="absolute pl-5 pb-5 bottom-2 h-8 w-full"> Last Location: Calgary, AB</div>

          </div>
        </div>
    </div>
   
  );
};

export default Home;