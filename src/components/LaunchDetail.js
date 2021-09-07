import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { SmallButton } from "../styles/buttons";
import falcon9 from "../icons/Falcon-9-Icon.svg";
import droneShip from "../icons/Droneship-Icon.svg";

const LaunchDetail = ({ type, data }) => {
    return (
        <LaunchDetailContainer>
            <LaunchDetailContent>
                <img
                    src={type === "rocket" ? falcon9 : droneShip}
                    alt={`Icon of a ${type}`}
                />
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

export const LaunchDetailContent = styled.div`
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
