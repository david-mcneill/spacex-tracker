import React, { useState, useEffect } from 'react';
import LaunchDetail from './LaunchDetail';
import { format } from 'date-fns';
import styled from 'styled-components';
import colors from '../styles/colors';
import * as T from '../styles/type';
import * as B from '../styles/buttons';

const LatestLaunch = () => {
    const [launchData, setLaunchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState('');

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launches/latest')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setLaunchData(data);
            setDate(format(new Date(data.date_unix * 1000), 'dd/MM/yyyy'));
            setLoading(false);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }, []);

    return (
        <LatestLaunchContainer>
            {loading ?
                <h3>Loading...</h3>
                :
                <div>
                    <LatestLaunchHeader style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.75) 9.9%, rgba(21, 23, 28, 0) 48.44%, rgba(39, 43, 51, 0.75) 88.54%), url(${launchData.links.flickr.original[0]})` }}>
                        <LatestLaunchTitle>
                            <T.launchBlockTitle>Latest Launch</T.launchBlockTitle>
                            <T.launchBlockDate>{date}</T.launchBlockDate>
                        </LatestLaunchTitle>
                        
                        <LatestLaunchPatch>
                            <img src={launchData.links.patch.small} alt={`Mission ${launchData.name}`} />
                        </LatestLaunchPatch>

                        <T.launchName>{launchData.name}</T.launchName>

                        <T.launchFlightNumber>
                            <span className="label">Flight No:</span>
                            <p className="flight-number">{launchData.flight_number}</p>
                        </T.launchFlightNumber>
                    </LatestLaunchHeader>

                    <LatestLaunchBody>
                        <T.launchDescription>{launchData.details}</T.launchDescription>
                        <div style={{ padding: '24px 0', textAlign: 'center' }}>
                            <B.Button href={launchData.links.webcast} target="_blank" rel="nofollower">Watch the launch</B.Button>
                        </div>
                        <LatestLaunchDetails>
                            <T.launchBlockTitle style={{ fontSize: 18, marginBottom: '32px' }}>Launch Details</T.launchBlockTitle>
                            {launchData.rocket &&
                                <LaunchDetail type="rocket" data={launchData.rocket}></LaunchDetail>
                            }
                            {launchData.ships &&
                                <LaunchDetail type="ship" data={launchData.ships[0]}></LaunchDetail>
                            }
                        </LatestLaunchDetails>
                    </LatestLaunchBody>
                </div>
            }
        </LatestLaunchContainer>
    );
}

export default LatestLaunch;


export const LatestLaunchContainer = styled.div`
    grid-column: 1 / span 6;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(139.98deg, #272B33 33.85%, #616B80 100%);
    box-shadow: 0px 0px 20px 8px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    color: ${colors.light};
`

export const LatestLaunchHeader = styled.div`
    padding: 32px;
    background-size: cover;
    border-radius: 6px 6px 0px 0px;
`;

export const LatestLaunchTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LatestLaunchPatch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 0;

    img {
        width: 200px;
        height: 200px;
    }
`;

export const LatestLaunchBody = styled.div`
    padding: 32px;
`;

export const LatestLaunchDetails = styled.div`
    padding: 24px;
    background: #303640;
    box-shadow: inset 0px 0px 16px 8px rgba(39, 43, 51, 0.5);
    border-radius: 6px;
`;