// Project -----1

// const { useState, useEffect } = require("react")

// import React from "react";
// import { useState } from "react";

// import { useState } from "react";

// const Myfirst = () => {
//   const [data, setData] = useState([]);
//   const [inputvalue, setinputValue] = useState("");

//   const handleInputChange = (e) => {
//     setinputValue(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setData([...data, { name: inputvalue }]);
//     setinputValue("");
//   };

//   return (
//     <>
//       <div>
//         <h1>Your Data:</h1>
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <form onSubmit={handleFormSubmit}>
//           <label>
//             Add Item:
//             <input
//               type="text"
//               value={inputvalue}
//               onChange={handleInputChange}
//             ></input>
//             <button type="submit">Add</button>
//           </label>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Myfirst;

// Project -----2

// import React from "react";
// import { useState } from "react";

// const second = () => {
//     const [count , setCount] = useState(0)
//     const [value , setvalue] = useState('')

//     const onkar = (e) => {
//         setvalue(e.target.value)
//     }
//     return (
//         <>
//         <h1>{count}</h1>
//         <input type="number" value={value} onChange={onkar}></input>
//         <button onClick={() => setCount(count+ + value)}>Add</button>
//         <button onClick={() => setCount(count- + value)}>sub</button>
//         <button onClick={() => location.reload()} >Reset</button>
//         </>
//     )
// }

// export default second;

// Project -----3

// import React, { useState } from "react";
// import { ReactDOM } from "react-dom/client";

// const bgcolor = () => {
//     const [color , setcolor] = useState("");

//     return(
//         <>
//         <div className="w-full h-screen" style={{backgroundColor:color}}>
//         <div className="flex justify-between align-middle">
//         <button className="w-16 h-10 bg-gray-100" onClick={(e) => setcolor("red")}>Red</button>
//         <button className="w-16 h-10 bg-gray-100" onClick={(e) => setcolor("green")}>Green</button>
//         <button className="w-16 h-10 bg-gray-100" onClick={(e) => setcolor("blue")}>Blue</button>
//         <button className="w-16 h-10 bg-gray-100" onClick={(e) => setcolor("yellow")}>Yellow</button>
//         </div>
//         </div>

//         </>
//     )
// }

// export default bgcolor;

// Project ----4

// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useCallback } from "react";

// const Passwordgen = () => {
//   const [lenght, setLength] = useState(6);
//   const [numberAllowed, setnumberAllowed] = useState(false);
//   const [char, setchar] = useState(false);
//   const [password, setPassword] = useState("");

//   const Passwordgenerator = useCallback(() => {
//     let pass = ""
//       let str =
//        "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstuvwxyz";
//       if (numberAllowed) str += "123456789"

//       if (char) str += "!@#$%^&*(){}[]"

//       for (let i = 0; i <= length; i++) {
//           let char = Math.floor(Math.random() * str.length + 1)
//           pass += str.charAt(char)
//         }
//         setPassword(pass)
//   },[lenght , numberAllowed , char])

//   useEffect(() => {
//     Passwordgenerator()
//   },[lenght , numberAllowed , char])

// //   Passwordgenerator()
//   return (
//     <>
//       <div className="w-full bg-gray-400 mx-auto shadow-md max-w-md rounded-lg px-4 my-8 text-red-700">
//         Password Generator
//         <div className="outline-none w-full py-1 px-3">
//           <input
//             type="text"
//             value={password}
//             placeholder="password"
//             readOnly
//           ></input>
//           <button className="px-3 outline-none text-white">Copy</button>
//         </div>
//         <div className="flex text-sm gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={8}
//               max={100}
//               value={lenght}
//               onChange={(e) => setLength(e.target.value)}
//             ></input>
//             <label>Length: {lenght}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="numberinput"
//               onChange={() => setnumberAllowed((prev) => !prev)}
//             ></input>
//             <label>Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={char}
//               id="charInput"
//               onChange={() => setchar((prev) => !prev)}
//             ></input>
//             <label>chracter</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Passwordgen;

// Project 5
// Weather_app
// import React from "react"
// import { useState } from "react"
// import { useEffect } from "react"
// import Logo from "../assets/img/sun.png"
// // import { ReactDOM } from "react"

// const Weather = () => {
//   const [data , setdata ] = useState()
//   const [search , setsearch] = useState('')
//   console.log(search);

//   async function Weatherapi() {
//     const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=0737c4278777cb69a76449c1f0a079dd&units=metric`)

//     const json = await data.json()
//     setdata(json)
//     console.log(json);
//   }

//   useEffect(() => {
//     Weatherapi()
//   },[search])

//   return(
//     <>
//     <div className="w-96 text-center mt-80 ml-96 gap-4 bg-gray-700 h-20 flex items-center justify-center border-2 rounded-lg ">
//       <input className="w-52 text-center rounded-sm" type="text" onChange={(e) => setsearch(e.target.value)}>
//       </input>
//       <button className="bg-white rounded-sm hover:bg-gray-300  px-2 " onClick={(e) => setsearch(search)}>Search</button>
//     </div>
//     <div className="text-white ml-96 bg-gray-700 w-96 max-h-96 border-2 rounded-lg">
//     <h1 className="text-center mt-2	text-3xl">Weathet App</h1>
//     <h1 className="text-3xl flex items-center mt-2 justify-center">Location - {data?.name}</h1>
//     <img className="w-32 mx-auto" src={Logo}></img>
//     <div className="flex justify-between p-4 m-4">
//     <div className="text-left">
//     <h1>Temp : {data?.main?.temp}</h1>
//     <h1>City : {data?.name}</h1>
//     </div>
//     <div className="  text-left ml-10">
//     <h1>Wind Speed : {data?.wind?.speed}</h1>
//     <h1>Humidity : {data?.main?.humidity}</h1>
//     </div>
//     <div>
//     </div>

//     </div>
//     </div>
//     </>
//   )

// }

// export default Weather;

// import React from "react";
// import { useReducer } from "react";

// const reducer = (state , action)=> {
//   if (action.type === "IncreMent") {
//     state = state + 1;
//   }
//   if (state > 0 && action.type === "DecreMent") {
//     state = state - 1;
//   }
//   return state;
// }

// const Usereducer = () => {
//   const initialData = 0;
//   const [state , dispatch] = useReducer(reducer , initialData)

//   return(
//     <React.Fragment>
//       <div>
//         <h1>{state}</h1>
//         <button onClick={() => dispatch({type:"IncreMent"})}>IncreMent</button>
//         <button onClick={() => dispatch({type:"DecreMent"})}>DecreMent</button>
//       </div>
//     </React.Fragment>
//   )
// }

// export default Usereducer;

// import React, { useEffect, useState } from "react";
// import { ReactDOM } from "react";

// const APIKEY = "AIzaSyC0_dpR_Cy2R4xuA6FZfp8Trqg1DoS6K80";
// const channelid = "UCkwvTC30Meo3ljfzejH4oKg";
// const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&channelId=${channelid}&part=snippet,id&order=date&maxResult=3`;

// const Youtube = () => {
//   const [allvideos , setallvideos] = useState([])
//   useEffect(() => {
//     fetch(fetchurl)
//       .then((response) => response.json())

//       .then((resJson) => {
//         const result = resJson.items.map((doc) => ({
//           ...doc,
//          Videolink:"https://www.youtube.com/embed/"+ doc.id.videoId
//         }));
//         setallvideos(result)
//       });
//   }, []);
// console.log(allvideos);
//   return (
//     <>
//       <div>
//       {allvideos.map((item) =>
//       <div>
//       <iframe width="560" height="315" className="w-56" src={item.Videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//       <p>{item.snippet.title}</p>
//       {/* <p>{item.snippe}</p> */}
//       </div>
//       )}
//       </div>
//     </>
//   );
// };

// export default Youtube;

