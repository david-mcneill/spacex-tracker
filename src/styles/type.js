import styled from 'styled-components';
import colors from './colors';

export const launchBlockTitle = styled.h4`
    display: inline-block;
    font-family: 'Inter Light';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    text-transform: uppercase;
    margin: 0;
    color: ${colors.light};
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        top: 102%;
        left: 0;
        background-color: ${colors.nepal};
    }
`;

export const launchBlockDate = styled.h4`
    font-family: 'Inter Light';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    text-transform: uppercase;
    color: ${colors.light};
    margin: 0;
`;

export const launchName = styled.h2`
    font-family: 'Inter Light';
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 1.4;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.light};
    margin: 0;
`;

export const launchDetails = styled.p`
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
`;

export const launchFlightNumber = styled.div`
    color: ${colors.light};
    text-align: center;

    .label {
        font-family: 'Inter Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
    }

    .flight-number {
        display: inline-block;
        font-family: 'Inter Bold';
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        margin: 0 0 0 8px;
    }
`;