import "./styling/Sidebar/sidebar.scss"

import SummarizeIcon from '@mui/icons-material/Summarize';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import ScienceIcon from '@mui/icons-material/Science';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import CellTowerIcon from '@mui/icons-material/CellTower';


import { Link } from "react-router-dom";


function Sidebar(props) {
  return (
    <div className="sidebar">
        <Link to="/">
            <div className="top">
                <img className="logo" src="/ctslogo.png" width={180} height={180} alt="logo"/>
            </div>
        </Link>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">SUMMARY</p>
                <Link to="/telemetry">
                    <li>
                        <SummarizeIcon/>
                        <span>
                            Dashboard
                        </span>
                    </li>
                </Link>
                
                <p className="title">GROUND</p>
                <Link to="/telemetry/ground_station">
                    <li>
                        <CellTowerIcon/>
                        <span>
                            Ground Station
                        </span>
                    </li>
                </Link>
                <p className="title">CUBESAT</p>
                <Link to="/telemetry/communications">
                    <li>
                        <SatelliteAltIcon/>
                        <span>
                            Communications
                        </span>
                    </li>
                </Link>
                <Link to="/telemetry/electrical">
                    <li>
                        <BoltIcon/>
                        <span>
                            Electrical
                        </span>
                    </li>
                </Link>
                <Link to="/telemetry/orbit">
                <li>
                    <LocationOnIcon/>
                    <span>
                        Orbit
                    </span>
                </li>
                </Link>
                <li>
                    <DeveloperBoardIcon/>
                    <span>
                        OBC
                    </span>
                </li>
                <li>
                    <ScreenRotationAltIcon/>
                    <span>
                        ADCS
                    </span>
                </li>
                <p className="title">PAYLOAD</p>
                <li>
                    <ScienceIcon/>
                    <span>
                        MPI
                    </span>
                </li>
                <li>
                    <PrecisionManufacturingIcon/>
                    <span>
                        Boom
                    </span>
                </li>
                <p className="title">MISCELLANEOUS</p>
                <li>
                    <MiscellaneousServicesIcon/>
                    <span>
                        Misc
                    </span>
                </li>
                
            </ul>
        </div>
       

    </div>
  );
};

export default Sidebar;