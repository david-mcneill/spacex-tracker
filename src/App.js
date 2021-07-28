import './App.css';
import Header from './components/Header';
import LatestLaunch from './components/LatestLaunch';
import UpcomingLaunch from './components/UpcomingLaunch';
import { OuterWrapper, Grid } from './styles/layout';

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <OuterWrapper>
          <Grid>
            <LatestLaunch />
            <UpcomingLaunch />
          </Grid>
        </OuterWrapper>
      </main>
    </div>
  );
}

export default App;
