// custom Hook

import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null
        /*const [blogs, setBlog] = useState([
          {title: 'Learning React', body: 'When you’re backed against the wall, break the goddamn thing down.', id:1, author:'Harvey'},
          {title: 'Buhari!!!!!', body: 'That’s the difference between you and me. You wanna lose small, I wanna win big.', id:2, author:'Harvey'},
          {title: 'Emi Lokan', body: 'Sorry, I can’t hear you over the sound of how awesome I am.', id:3, author:'James'},
        ]
        */
        );

    // set a conditional loading message for the frontend
const [isPending, setLoading] = useState(true);

// set a conditional error message for the frontend
const [error, setError] = useState(null);

    useEffect(() =>{
        // prevent DOM remanipulation on refreshes of a page if data is same
        const abortCont = new AbortController();

        setTimeout(()=> {
          fetch(url, {signal : abortCont.signal}).
          then(res =>{
            //console.log(res)
            if(!res.ok){
              setLoading(false);
              throw Error("failed to fetch data for this resource!!!");
            }
            
            return res.json();
          }).
          then(data =>{
            setData(data)
            setLoading(false)
            setError(null)
       // console.log(data)
          }).
          catch(err =>{
            if(err.name =="AbortError"){
                console.log(err.message);
            }
            else{
            console.log(err.message);
            setError(err.message);
            }
          });
        }, 1000);
        
        // cleanup function to abort the fetch being redone again
        return () => abortCont.abort();
      }, [url]);
      
      return {data, isPending, error}
}


export default useFetch;