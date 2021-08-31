import React from "react";
import LatestLaunch from "../components/LatestLaunch";
import UpcomingLaunch from "../components/UpcomingLaunch";
import { Grid, OuterWrapper } from "../styles/layout";

const Home = () => {
    return (
        <OuterWrapper>
            <div style={{ padding: "50px 0" }}>
                <Grid>
                    <LatestLaunch />
                    <UpcomingLaunch />
                </Grid>
            </div>
        </OuterWrapper>
    );
};

export default Home;
