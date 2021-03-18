import Stats from './components/statistics/Stats'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './components/userAuth/LandingPage';
import Navbar from './components/Navbar';
import { UserProvider } from './components/userAuth/UserContext'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Route path="/" component={Navbar}/>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/stats-page" component={Stats} />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
