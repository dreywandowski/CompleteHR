/**
 we can create separate components as desired and attached them under the
 App component, which serves as the root component.

 the className keyword is transcribed as an HTML class in React
 */

//import './App.css';
import AduraComponent from './home/myComponent';
import BlogComponent from './blogs/blogs';

function App() {
  const title = "Welcome to Adura's very first react project";
  return (
    <div className="App">
      <AduraComponent></AduraComponent>
      <div className="content">
        <h1> { title}</h1>
        <br></br>
        <BlogComponent></BlogComponent>
        </div>
    </div>
  );
}

export default App;
