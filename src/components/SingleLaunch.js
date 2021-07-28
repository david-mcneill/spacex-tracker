import React from "react";
import moment from 'moment';
import styled from 'styled-components';

import { Button } from '../styles/buttons';

const SingleLaunch = ({ launch }) => {
  return (
    <LaunchContainer>
      <LaunchPatch>
        {launch.links.patch ?
          <img src={launch.links.patch.small} alt="" width="200px" />
          :
          <p style={{ textAlign: "center" }}>No patch assigned yet</p>
        }
        
      </LaunchPatch>

      <LaunchDetails>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li>
            <span><strong>Flight No:</strong> {launch.flight_number}</span>
          </li>

          <li>
            <span><strong>Mission Name:</strong> {launch.name}</span>
          </li>

          <li>
            <span><strong>Date:</strong> {moment(launch.date_utc).format('DD/MM/YYYY')}</span>
          </li>
          
          <li>
            {launch.links.details !== null &&
              <span><strong>Mission Description: </strong> {launch.details}</span>
            }
          </li>
        </ul>

        <LaunchVideoLink>
          {launch.links.youtube_id !== null &&
            <Button href={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`} target="_blank" rel="noopener noreferrer">Watch the Launch</Button>
          }
        </LaunchVideoLink>
      </LaunchDetails>
    </LaunchContainer>
  )
}

export default SingleLaunch;

export const LaunchContainer = styled.div`
  display: flex;
  padding: 20px 0;
`

export const LaunchPatch = styled.div`
  flex-basis: 30%;
  padding-right: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const LaunchDetails = styled.div`
  flex: 1;

  ul {
    li {
      margin-bottom: 12px;
    }
  }
`

export const LaunchVideoLink = styled.div`
  margin-top: 48px;
`