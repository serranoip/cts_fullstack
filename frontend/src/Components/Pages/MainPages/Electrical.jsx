import Sidebar from "../TelemetryPageNavigation/Sidebar";
import Navbar from "../TelemetryPageNavigation/Navbar";
import "../styling/electrical.scss"

const Electrical = () => {
    return (
        <div className="electrical">
            <Sidebar/>
            <div className="electricalContainer">
                <Navbar/>
                Hi I'm here electrical
            </div>
        </div>
    );
};
export default Electrical;