import Sidebar from "../TelemetryPageNavigation/Sidebar"
import Navbar from "../TelemetryPageNavigation/Navbar";
import Widget from "../Widgets/Widget";
import Chart from "../Charts/Chart";
import Featured from "../Featured/Featured";
import TableSummary from "../../Table/Table";
import "../styling/telemetry.scss"


const Telemetry = () => {
    return(
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget  type="Electrical"/>
                    <Widget type="Communications"/>
                    <Widget type="GPS"/>
                    <Widget type="Boom"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Data Overview</div>
                    <TableSummary/>
                </div>
            </div>
        </div>
    );      
};

export default Telemetry;