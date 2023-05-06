import Sidebar from "../TelemetryPageNavigation/Sidebar";
import Navbar from "../TelemetryPageNavigation/Navbar";
import "../styling/groundstation.scss"

const GroundStation = () => {
    return(
        <>
            <div className="gs">
                <Sidebar/>
                <div className="gsContainer">
                    <Navbar/>
                    Hi I'm here gs
                </div>
            </div>
        </>
    );  
}

export default GroundStation;