import "./styling/widget.scss"

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BoltIcon from '@mui/icons-material/Bolt';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

import React from 'react'

const Widget = ({props, type}) => {
    let data;
    const amount = "5V";
    const diff = 20;

        switch(type){
            case "Electrical":
            data={
                title: "Electrical",
                isMoney: false,
                link: "Status: Nominal",
                icon: <BoltIcon className="icon" style={{color: "green"}}/>,
            };
            break;
            case "Communications":
            data={
                title: "Communications",
                isMoney: false,
                link: "Uplink/Downlink: Connected",
                icon: <SatelliteAltIcon className="icon" style={{color: "yellow"}}/>,
            };
            break;
            case "GPS":
            data={
                title: "GPS",
                isMoney: false,
                link: "50.8688° N, 114.2913° W",
                icon: <LocationOnIcon className="icon" style={{color: "red"}}/>,
            };
            break;
            case "Boom":
            data={
                title: "Boom",
                isMoney: false,
                link: "Status: Extended",
                icon: <PrecisionManufacturingIcon className="icon"/>,
            };
            break;
            default:
                break;
        }


  return (
   <div className="widget">
    <div className="left">
        <span className="title">
            {data.title}
        </span>
        <span className="counter">
            {data.isMoney && "$"} {amount}
        </span>
        <span className="link">
            {data.link}
        </span>
    </div>
    <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {diff}
        </div>
       {data.icon}
    </div>
   </div>
  )
}

export default Widget;