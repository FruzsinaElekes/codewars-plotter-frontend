import Stats from './components/statistics/Stats'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './components/userAuth/LandingPage';
import Navbar from './components/Navbar';
import Registration from './components/userAuth/Registration';
import Login from './components/userAuth/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar}/>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/stats-page" component={Stats} />
        <Route path="/login-page" component={Login} />
        <Route path="/registration-page" component={Registration} />
      </Router>
    </div>
  );
}

export default App;
