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
                <LaunchDetailIcon
                    src={iconSwitch(type)}
                    alt={`Icon of a ${type}`}
                />
                <LaunchDetailType>
                    {type === "rocket" ? "Booster" : "Droneship"}
                </LaunchDetailType>
                <TextButton to={`/${type}/${data}`}>Read More</TextButton>
            </LaunchDetailContent>
        </LaunchDetailContainer>
    );
};

export default LaunchDetail;

export const LaunchDetailContainer = styled.div`
    color: ${colors.nepal};
    @media screen and (max-width: 1024px) {
        margin-bottom: 18px;
    }
`;

export const LaunchDetailContent = styled.div`
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LaunchDetailIcon = styled.img`
    flex: 1;
`;

export const LaunchDetailType = styled.h4`
    font-family: "Inter Light";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    text-transform: uppercase;
    color: ${colors.light};
`;
