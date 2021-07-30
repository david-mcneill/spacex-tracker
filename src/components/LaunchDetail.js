import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { SmallButton } from '../styles/buttons';
import falcon9 from '../icons/Falcon-9-Icon.svg';
import droneShip from '../icons/Droneship-Icon.svg';

const LaunchDetail = ({type, data}) => {
    return (
        <LaunchDetailContainer>
            <LaunchDetailTitle>{type}</LaunchDetailTitle>
            <LaunchDetailContent>
                <img src={type === 'rocket' ? falcon9 : droneShip} />
                <SmallButton to={`/${type}/${data}`}>View Details</SmallButton>
            </LaunchDetailContent>
        </LaunchDetailContainer>
    );
};

export default LaunchDetail;

export const LaunchDetailContainer = styled.div`
  color: ${colors.nepal};
  margin-bottom: 18px;
`;  

export const LaunchDetailTitle = styled.h4`
    font-family: 'Inter Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    margin: 0;
`;

export const LaunchDetailContent = styled.div`
    border: 2px solid ${colors.nepal};
    border-radius: 3px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;