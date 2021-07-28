import styled from 'styled-components';
import colors from './colors';

export const OuterWrapper = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 12px;
`

export const LaunchDetail = styled.div`
  color: ${colors.nepal};
  margin-bottom: 18px;
  
  .LaunchDetailTitle {
    font-family: 'Inter Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
  }

  .LaunchDetailContent {
    border: 2px solid ${colors.nepal};
    border-radius: 3px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
  