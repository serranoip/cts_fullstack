import "./styling/featured.scss"
import { MoreVert } from "@mui/icons-material"
import { CircularProgressbar } from "react-circular-progressbar"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Cubesat Status</h1>
            <MoreVert/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={100} text={"100%"} strokeWidth={5}/>
            </div>
            <p className="title">Cubesat stabilized</p>
            <p className="secondTitle">Payloads are operational</p>
            <p className="thirdTitle">Ground Station connection established</p>
            <p className="descTitle">ALL SYSTEMS OPERATIONAL</p>  
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Last Recorded Temperature: </div>
                    <div className="itemResult hotter">
                        <WhatshotIcon/>
                        <div className="resultAmount"> 46 C </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Recent Temperature: </div>
                    <div className="itemResult colder">
                        <AcUnitIcon/>
                        <div className="resultAmount"> 35 C </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Featured