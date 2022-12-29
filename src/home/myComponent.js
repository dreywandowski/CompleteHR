/*
our component will always be a function (arrowed or normal), while all
our html to be outputted will be in the render() method.

In order to make inline styling for our react components, we use the style
attribute like in HTML, but the css attritibutes will be name:value pairs
in objects, attributes with hypens will have the camel case
*/
import { useState } from "react";

const  AduraComponent = () => {

    // handle click events and wrap all ur functions needing arguemnts
    // in an anon function to allow u pass parameters
    // gain access to events by passing them as arguemnts in the anon functions
    // to ur functions

    const handleClick = (e, name) => {
        alert('I am clickable from the react project!! Here is my name '+ name + 'event == '+e.target);
    }

   // use state is a hook used to dynamically update template values in HTML
   // as we are changing it in javascript. useState can be used to
   // get the original value while the second method to set it, using the two methods available to us
   // from useState by default, first is to get, second is to set

   // useEffect is another React Hook used to capture data for every rendering of the DOM.
   // this fires for every
    const [names, setName] = useState('dreywandowski');
    const handleClickState = (e, names) => {
      setName(names);
    }
    return ( 
        <nav className="navbar">
            <h1>Adura's Blog</h1>
            <div className="links">
                <a href="/"> Home</a>
                <a href="/create"> Add</a>
                <a href="/Test" style={{'color': 'green', 'backgroundColor':'#f1356d', 'borderRadius': '30px'}}> Testing Inline CSS</a>
               <button onClick={(e) => 
                handleClick('Aduramimo Oludare', e)}>I am clickable!</button>
             <button style={{'color': 'indigo', 'backgroundColor':'#maroon', 'borderRadius': '30px'}}onClick={(e) => 
                handleClickState(e, 'Bukayo Saka')}>I want to change state using useState</button>
           
            </div>
            <p> {names}</p>
        </nav>
     );
}
 
export default AduraComponent;