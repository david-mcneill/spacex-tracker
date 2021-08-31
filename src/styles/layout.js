import styled from "styled-components";

export const OuterWrapper = styled.div`
    width: 90%;
    height: 100%;
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 12px;

    @media screen and (max-width: 1024px) {
        display: block;
    }
`;
