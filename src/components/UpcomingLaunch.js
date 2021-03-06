import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styled from "styled-components";
import colors from "../styles/colors";
import * as T from "../styles/type";
import Loading from "./Loading";

const UpcomingLaunch = () => {
    const [launchData, setLaunchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState("");

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/launches/next")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLaunchData(data);
                setDate(format(new Date(data.date_unix * 1000), "dd/MM/yyyy"));
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return (
        <UpcomingLaunchContainer>
            {loading ? (
                <Loading mini />
            ) : (
                <div style={{ width: "100%", height: "100%" }}>
                    <UpcomingLaunchHeader>
                        <UpcomingLaunchTitle>
                            <T.launchBlockTitle>
                                Upcoming Launch
                            </T.launchBlockTitle>
                            <T.launchBlockDate>{date}</T.launchBlockDate>
                        </UpcomingLaunchTitle>

                        <UpcomingLaunchPatch>
                            {launchData.links.patch.small && (
                                <img
                                    src={launchData.links.patch.small}
                                    alt={`Mission ${launchData.name}`}
                                />
                            )}
                        </UpcomingLaunchPatch>

                        <T.launchName>{launchData.name}</T.launchName>

                        <T.launchFlightNumber>
                            <span className="label">Flight No:</span>
                            <p className="flight-number">
                                {launchData.flight_number}
                            </p>
                        </T.launchFlightNumber>
                    </UpcomingLaunchHeader>

                    <UpcomingLaunchBody>
                        {launchData.details ? (
                            <T.launchDescription>
                                {launchData.details}
                            </T.launchDescription>
                        ) : (
                            <p style={{ textAlign: "center" }}>
                                Launch details to be confirmed
                            </p>
                        )}
                    </UpcomingLaunchBody>
                </div>
            )}
        </UpcomingLaunchContainer>
    );
};

export default UpcomingLaunch;

export const UpcomingLaunchContainer = styled.div`
    grid-column: 7 / span 6;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: start;
    background: linear-gradient(139.98deg, #272b33 33.85%, #616b80 100%);
    box-shadow: 0px 0px 20px 8px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    color: ${colors.light};
`;

export const UpcomingLaunchHeader = styled.div`
    padding: 32px;
    background-size: cover;
    border-radius: 6px 6px 0px 0px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.75) 9.9%,
        rgba(21, 23, 28, 0) 48.44%,
        rgba(39, 43, 51, 0.75) 88.54%
    );
`;

export const UpcomingLaunchTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UpcomingLaunchPatch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 0;

    img {
        width: 200px;
        height: 200px;
    }
`;

export const UpcomingLaunchBody = styled.div`
    padding: 32px;
`;
