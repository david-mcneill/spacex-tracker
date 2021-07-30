import React from 'react';
import LatestLaunch from '../components/LatestLaunch';
import UpcomingLaunch from '../components/UpcomingLaunch';
import { Grid } from '../styles/layout';

const Home = () => {
    return (
        <Grid>
            <LatestLaunch />
            <UpcomingLaunch />
        </Grid>
    )
};

export default Home;