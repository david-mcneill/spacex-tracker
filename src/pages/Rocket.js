import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { OuterWrapper } from "../styles/layout";
import { Button } from "../styles/buttons";

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
            });
    }, [url]);

    return (
        <div>
            {loading ? (
                <p>Loading data...</p>
            ) : (
                <>
                    <RocketHeader>
                        <RocketHeaderGradient />
                        <RocketHeaderBackground
                            src={
                                rocketData.flickr_images[
                                    Math.floor(
                                        Math.random() *
                                            rocketData.flickr_images.length
                                    )
                                ]
                            }
                            alt={`${rocketData.name}`}
                        />

                        <RocketName>
                            <h1>{rocketData.name}</h1>
                        </RocketName>
                    </RocketHeader>

                    <OuterWrapper>
                        <RocketInfo>
                            <div>
                                <p>Height: {rocketData.height.meters} m</p>
                                <p>Mass: {rocketData.mass.kg} kg</p>
                                <p>Description: {rocketData.description}</p>
                                <Button
                                    href={rocketData.wikipedia}
                                    target="_blank"
                                    rel="nofollower"
                                >
                                    Read More
                                </Button>
                            </div>
                        </RocketInfo>
                    </OuterWrapper>
                </>
            )}
        </div>
    );
};

export default Rocket;

export const RocketHeader = styled.div`
    height: calc(100vh - 85px);
    position: relative;
`;

export const RocketHeaderBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`;

export const RocketHeaderGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(48, 54, 64, 0.4);
    z-index: 1;
`;

export const RocketName = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 40px 60px;

    h1 {
        margin: 0;
        font-size: 96px;
        color: #fff;
        font-family: "Inter Bold";
        text-transform: uppercase;
        letter-spacing: 3px;
    }
`;

export const RocketInfo = styled.div`
    padding: 75px 0;
`;
