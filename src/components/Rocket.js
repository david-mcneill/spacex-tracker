import {useEffect, useState} from "react";
import { LaunchDetail } from "../styles/layout";
import { SmallButton } from "../styles/buttons";
import falcon9 from '../icons/Falcon-9-Icon.svg';

const Rocket = ({ rocketId }) => {
    const url = `https://api.spacexdata.com/v4/rockets/${rocketId}`;
    const [loading, setLoading] = useState(true);
    const [rocketData, setRocketData] = useState(null);
          
    useEffect(() => {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setRocketData(data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [rocketId, url]);

    return (
        <div>
            {loading ?
                <p>Loading data...</p>
                :
                <LaunchDetail>
                    <span className="LaunchDetailTitle">Booster</span>
                    <div className="LaunchDetailContent">
                        <img src={falcon9} alt="Icon of Falcon 9 booster" />
                        <p>Name: {rocketData.name}</p>
                        <p>Stages: {rocketData.stages}</p>
                        <SmallButton>View Details</SmallButton>
                    </div>
                </LaunchDetail>
            }
        </div>
    );
}

export default Rocket;