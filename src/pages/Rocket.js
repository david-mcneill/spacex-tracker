import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const Rocket = () => {
    let params = useParams();
    const url = `https://api.spacexdata.com/v4/rockets/${params.id}`;
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
    }, [url]);

    return (
        <div>
            {loading ?
                <p>Loading data...</p>
                :
                <div>
                    <img src={rocketData.flickr_images[0]} width="400" height="auto" alt={`${rocketData.name}`} />
                    <h1>{rocketData.name}</h1>
                    <p>Height: {rocketData.height.meters}m</p>
                    <p>Mass: {rocketData.mass.kg}kg</p>
                </div>
            }
        </div>
    );
}

export default Rocket;