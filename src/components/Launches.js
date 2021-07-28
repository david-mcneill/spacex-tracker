import React, { Component } from "react";
import SingleLaunch from './SingleLaunch';
import styled from 'styled-components';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      launch: {},
      error: false,
      errorMessage: ""
    }
  }

  componentDidMount() {
    const launchType = this.props.type;
    const url = `https://api.spacexdata.com/v4/launches/${launchType}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          loading: false,
          launch: data
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMessage: error.message
        });
      })
  }

  render() {
    const { loading, launch, error, errorMessage } = this.state;
    return (
      <div>
        {!error ? (
          <div>
            {!loading ?
              <SingleLaunch launch={launch} />
              :
              <Loading>Loading Data. Please wait...</Loading>
            }
          </div>
        ) : (
          <div>
            <Error>There was an error: <strong>{errorMessage}</strong></Error>
          </div>
        )}
      </div>
    )
  }
}

export default Launches;

export const Error = styled.p`
  color: red;
`

export const Loading = styled.p`
  font-size: 18px;
`