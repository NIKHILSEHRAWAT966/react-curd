// import { useEffect, useState } from "react"

// const LearnUseEffect = () => { // functional compoent

//     const [count, setCount] = useState(0)  //state
//     const [name, setName] = useState(0)  //state

//     const increment = () => {
//         setCount(count + 1);
//     }

    // runs when component is mounted(rendered on page) or state and prop changes
    // useEffect(()=>{
    //     console.log("component rendered count",count);       
    // }); 

    // // runs only when component is mounted(rendered on page) or state and prop changes
    // useEffect(()=>{
    //     console.log("component rendered count",count);       
    // },[]);

    // runs only when count state changes
    // useEffect(() => {
    //     console.log("component rendered count", count);
    // }, [count]); // dependency array

    // runs only when count,name state changes
    // useEffect(() => {
    //     console.log("component rendered count", count);
    // }, [count,name]); // dependency array

    // runs only when count,name state changes
//     useEffect(() => {
//         console.log("component rendered count", count);
//         return()=>{ // cleanup function
//             console.log("component unmounted !");
            
//         }
//     }, [count,name]); // dependency array

//     return (
//         <>
//             <h1 className="text-center text-3xl text-white bg-black ">Welcome {name} to our website ! count {count}</h1>
//             <div className="flex justify-center bg-black py-10">
//                 <button onClick={increment} className="bg-purple-500 rounded p-2 text-white">increment</button>
//                 <input type="text" className="border-2 border-white-500 bg-black text-white" onChange={(e) => setName(e.target.value)} />
//                 <button onClick={() => setCount(count - 1)} className="bg-purple-500 text-white rounded p-2 ml-3">decrement</button>
//             </div>
//         </>
//     )
// }

// export default LearnUseEffect




import { useState, useEffect } from 'react';

const LearnUseEffect = () => {
  const [time, setTime] = useState(new Date());

  // Set up an interval to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every 1000ms (1 second)

    // Cleanup function to clear the interval when the component unmounts
    return () => {
        console.log("clock reseted!");

      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default LearnUseEffect;
