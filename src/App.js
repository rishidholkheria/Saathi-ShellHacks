import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Volunteer from './pages/VolCleanIndia/VolCleanIndia';
import Sidebar from './components/Sidebar';
import ProfileSide from './components/ProfileSide';
import { ToastProvider, useToasts } from 'react-toast-notifications';


function App() {
  return (
    <ToastProvider>
    <Router>
      <Switch>
        <div className="App">
          <Navbar/>
          <div className="app_body">
            <Sidebar/>
            <div className="body_conent">
              <Route path="/clean-india" exact={true} component={Volunteer}></Route>
            </div>
              <ProfileSide/>
          </div>
        </div>
      </Switch>
    </Router>
    </ToastProvider>
  );
}

export default App;
