/**
 we can create separate components as desired and attached them under the
 App component, which serves as the root component.

 the className keyword is transcribed as an HTML class in React
 */

//import './App.css';
import AduraComponent from './home/myComponent';
import BlogComponent from './blogs/blogs';
import SignInSide from './home/SignInSide';

function App() {
  const title = "Welcome to CompleteHR, your one-stop platform for your Human Resources needs.";
  return (
    <div className="App">
   
      <div className="content">
        <h1> { title}</h1>
        <br></br>
        <AduraComponent></AduraComponent>
        <BlogComponent></BlogComponent>
     
        </div>
    </div>
  );
}

export default App;
