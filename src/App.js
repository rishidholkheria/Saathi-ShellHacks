import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/Navbar";
import Volunteer from "./pages/VolCleanIndia/VolCleanIndia";
import Sidebar from "./components/Sidebar";
import ProfileSide from "./components/ProfileSide";
import { ToastProvider, useToasts } from "react-toast-notifications";
import Login from "./pages/Login/Login";
import VolFoodBooks from "./pages/VolFoodBooks/VolFoodBooks";
import OrgCleanIndia from "./pages/NgoOrg/OrgCleanIndia";
import VolHealthcare from "./pages/VolHealtchcare/VolHealthcare";
import { database, storage } from "./firebase";
import Carousel from "./pages/Login/Carousel";

function App() {
  const [user] = useAuthState(auth);
  // console.log(auth);

  var childData = [];

  // const UserTypeHandler = () => {
  //   var temp = database.ref('users/').once("value").then((snapshot) => {
  //     snapshot.forEach(function (childSnapshot) {
  //           var cdata = childSnapshot.val();
  //           childData.push(cdata)
  //     });
  //   })
  //   // childData.filter(type => type.userID === localStorage.getItem("SAATHI_ID")).map(filteredName => (
  //   //   // localStorage.setItem("Utype", filteredName.userType)
  //   //   console.log(type.userID)
  //   // ))

  //   {childData.filter(per => per.userId === localStorage.getItem("SAATHI_ID")).map(filteredPerson => (
  //     localStorage.setItem("Utype", filteredPerson.userType)
  //   ))}
  //   console.log(childData)
  //   console.log("hiiiiiiiiiii")
  // }

  if (user) {
    return (
      <ToastProvider>
        {/* {UserTypeHandler()} */}
        <Router>
          <Switch>
            <div className="App">
              <Navbar />
              <div className="app_body">
                <Sidebar />
                <div className="body_conent">
                  {/* <Route path="/org-clean-india" exact={true} component={OrgCleanIndia}></Route> */}
                  <Route
                    path="/food-books"
                    exact={true}
                    component={VolFoodBooks}
                  ></Route>
                  <Route
                    path="/healthcare"
                    exact={true}
                    component={VolHealthcare}
                  ></Route>
                  <Route path="/" exact={true} component={Volunteer}></Route>
                </div>
                <ProfileSide />
              </div>
            </div>
          </Switch>
        </Router>
      </ToastProvider>
    );
  } else {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
