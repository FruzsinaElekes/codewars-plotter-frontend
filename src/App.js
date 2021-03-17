import Stats from './components/Stats'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Login from './components/Login';

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
