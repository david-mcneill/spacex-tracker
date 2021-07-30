import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const Ship = () => {
    let params = useParams();
    const url = `https://api.spacexdata.com/v4/ships/${params.id}`;
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
    }, []);

    return (
        <div>
            {loading ?
                <p>Loading data...</p>
                :
                <div>
                    <img src={shipData.image} width="400" height="auto" alt={`${shipData.name}`} />
                    <h1>{shipData.name}</h1>
                    <p>Type: {shipData.type}</p>
                    {shipData.model && <p>Model: {shipData.model}</p>}
                </div>
            }
        </div>
    );
}

export default Ship;