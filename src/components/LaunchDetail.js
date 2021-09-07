import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { TextButton } from "../styles/buttons";
import falcon9 from "../icons/Falcon-9-Icon.svg";
import droneShip from "../icons/Droneship-Icon.svg";
import capsule from "../icons/Capsule-Icon.svg";

const LaunchDetail = ({ type, data }) => {
    function iconSwitch(type) {
        switch (type) {
            case "rocket":
                return falcon9;
            case "payloads":
                return capsule;
            case "ship":
                return droneShip;
            default:
                return null;
        }
    }

    return (
        <LaunchDetailContainer>
            <LaunchDetailContent>
                <img
                    src={iconSwitch(type)}
                    alt={`Icon of a ${type}`}
                    style={{ marginBottom: 12 }}
                />
                <TextButton to={`/${type}/${data}`}>Read More</TextButton>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
