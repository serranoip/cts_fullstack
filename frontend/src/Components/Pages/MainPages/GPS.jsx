import Sidebar from "../TelemetryPageNavigation/Sidebar";
import Navbar from "../TelemetryPageNavigation/Navbar";
import "../styling/communications.scss"

const GPS = () => {
    return(
        <>
            <div className="communications">
                <Sidebar/>
                <div className="communicationsContainer">
                    <Navbar/>
                    Hi I'm here Orbit - desktop
                </div>
            </div>
        </>
    );  
};

export default GPS;