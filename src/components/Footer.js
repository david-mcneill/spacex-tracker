import React from "react";
import styled from "styled-components";
import { OuterWrapper } from "../styles/layout";
import colors from "../styles/colors";

const Footer = () => {
    return (
        <FooterContainer>
            <OuterWrapper>
                <FooterDisclaimer>
                    <p>
                        This is a fan-run site and is in no way affiliated with
                        SpaceX (Space Exploration Technologies Corp.) or NASA
                        (North American Space Administration).
                    </p>
                    <p>All rights maintained by the respective owners</p>
                    <p>All photos courtesy of SpaceX & NASA.</p>
                    <p>
                        Data provided by{" "}
                        <a href="https://github.com/r-spacex">r-spacex</a>'s
                        Open Source{" "}
                        <a href="https://github.com/r-spacex/SpaceX-API">API</a>
                    </p>
                </FooterDisclaimer>
            </OuterWrapper>
        </FooterContainer>
    );
};

export default Footer;

export const FooterContainer = styled.footer`
    background: linear-gradient(90deg, #13151a 0%, rgba(39, 43, 51, 0.79) 100%);
    border-top: 4px solid #e3e3e3;
    color: ${colors.light};
    padding: 28px 0;
`;

export const FooterDisclaimer = styled.div`
    max-width: 550px;
    margin: 0 auto;
    font-size: 0.875rem;
    text-align: center;
    line-height: 1.3;

    a {
        color: ${colors.nepal};
    }
`;
