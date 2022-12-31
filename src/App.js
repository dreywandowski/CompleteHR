/**
 we can create separate components as desired and attached them under the
 App component, which serves as the root component.

 the className keyword is transcribed as an HTML class in React
 */

//import './App.css';
import AduraComponent from './home/myComponent';
import BlogComponent from './blogs/blogs';
import CreateBlog from './blogs/createBlog';
import BlogDetails from './blogs/blogDetails';

import SignInSide from './home/SignInSide';

/* react router, to switch routes **/
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const title = "Welcome to CompleteHR, your one-stop platform for your Human Resources needs.";
  return (
    <Router>
    <div className="App">
    <AduraComponent />
      <div className="content">
        <h1> { title}</h1>
        <br></br>
       <Switch>
        <Route exact path="/">
          <BlogComponent />
          </Route>
          <Route  path="/create">
          <CreateBlog />
          </Route>
          <Route  path="/blogs/:id">
          <BlogDetails />
          </Route>
          </Switch>
        
        </div>
    </div>
    </Router>
  );
}

export default App;
