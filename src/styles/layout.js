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

export const LaunchSection = styled.section`
  margin-bottom: 48px;
  padding-bottom: 48px;

  .launch-section-header {
    background-color: ${colors.dark};
    padding: 18px;

    h2 {
      margin: 0;
      color: ${colors.light};
      font-size: 1.125em;
      font-weight: 300;
      text-transform: uppercase;
    }
  }
`