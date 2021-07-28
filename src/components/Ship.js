import {useEffect, useState} from "react";
import { LaunchDetail } from "../styles/layout";
import { SmallButton } from "../styles/buttons";
import droneShip from '../icons/Droneship-Icon.svg';

const Ship = ({ shipId }) => {
    const url = `https://api.spacexdata.com/v4/ships/${shipId}`;
    const [loading, setLoading] = useState(true);
    const [shipData, setShipData] = useState(null);
          
    useEffect(() => {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setShipData(data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [shipId, url]);

    return (
        <div>
            {loading ?
                <p>Loading data...</p>
                :
                <LaunchDetail>
                    <span className="LaunchDetailTitle">Recovery Vessel</span>
                    <div className="LaunchDetailContent">
                        <img src={droneShip} alt="Icon of a SpaceX Droneship" />
                        <p>Name: {shipData.name}</p>
                        <p>Type: {shipData.type}</p>
                        <SmallButton>View Details</SmallButton>
                    </div>
                </LaunchDetail>
            }
        </div>
    );
}

export default Ship;