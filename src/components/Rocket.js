import React, {useState} from "react";

const Rocket = ({ rocketId }) => {
    const url = `https://api.spacexdata.com/v4/rockets/${rocketId}`;
    const [rocketData, setRocketData] = useState({});
            
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setRocketData(data);
        })
        .catch((error) => {
            console.log(error);
        })

    return rocketData;
}

export default Rocket;