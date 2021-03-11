//styles
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//routing
import { Route, Switch } from 'react-router-dom'

//components
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

//redux
import store from "./store/store";
import { Provider } from 'react-redux';
import Issues from './components/issue/View-Issue/Issues';
import AddIssue from './components/issue/Add-Issue/AddIssue';
import OneIssue from './components/issue/View-Issue/Issue';
import UpdateIssue from './components/issue/update-issue/UpdateIssue';
// import Header from './components/Navbar/Header';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import Footer from './components/Footer/Footer';
import ViewIssue from './components/charts/ViewIssue';
import NavBar from './components/Navbar/NavBar';
function App() {
  return (
    <Provider store={store}>
      
          <NavBar />
          <ToastContainer />
          <div style={{width:"90%",margin:"auto"}} >
            <Switch>
              <Route path="/" exact component={Issues} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
              <PrivateRoute path="/add-issue" exact component={AddIssue} />
              <PrivateRoute path="/issue/:id" exact component={OneIssue} />
              <PrivateRoute path="/update-issue/:id" exact component={UpdateIssue} />
              <PrivateRoute path="/charts/issue" exact component={ViewIssue} />

            </Switch>
          </div>
      
        {/* <Footer /> */}
    
    </Provider>
  );
}

export default App;
