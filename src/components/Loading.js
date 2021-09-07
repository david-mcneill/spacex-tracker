import React from "react";
import styled from "styled-components";
import falcon9 from "../icons/Falcon-9-Icon.svg";
import { rotate } from "../styles/animations";
import colors from "../styles/colors";

const Loading = ({ mini }) => {
    return (
        <LoadingWrapper mini={mini}>
            <LoadingIcon>
                <img src={falcon9} alt="" />
            </LoadingIcon>
        </LoadingWrapper>
    );
};

export default Loading;

export const LoadingWrapper = styled.div`
    min-height: ${(props) => (props.mini ? "475px" : "100vh")};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.shark};
`;

export const LoadingIcon = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
`;
