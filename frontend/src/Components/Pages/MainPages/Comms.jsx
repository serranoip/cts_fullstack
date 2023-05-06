import Sidebar from "../TelemetryPageNavigation/Sidebar";
import Navbar from "../TelemetryPageNavigation/Navbar";
import "../styling/communications.scss"



const Communications = () => {
    return(
        <>
            <div className="communications">
                <Sidebar/>
                <div className="communicationsContainer">
                    <Navbar/>
                    Hi I'm here communications
                </div>
            </div>
        </>
    );  
};

export default Communications;