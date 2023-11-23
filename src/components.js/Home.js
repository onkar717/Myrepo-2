    // // function filterdata(search , allvideos){
    // //     const filterdata = allvideos.filter((allvideo) => 
    // //     allvideo.snippet.title.toLowerCase().includes(search.toLowerCase()))
    // //     return filterdata;
    // // }
    // // href="https://www.youtube.com/channel/UCe7UKRSJM6ITMfXX-CbET0w
    // // href="https://www.youtube.com/channel/UCe7UKRSJM6ITMfXX-CbET0w
    // // ="https://www.youtube.com/channel/    
    
    // // const channelid = "UCnnQ3ybuyFdzvgv2Ky5jnAA"
    // // const fetchurl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=YOUR_MAX_RESULTS&playlistId=${search}&key=${APIKEY}`
    
    // useEffect(() => {
    //     const retrivedata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //     setvideos(retrivedata)
    // } ,[])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(videos))
    // },[search])
    
    // const Remove = (id) => {
    //     const videos = allvideos.filter((video) => video.id !== id)
    //     setallvideos(videos)
    // }
    // const [videos , setvideos] = useState([])
    // const LOCAL_STORAGE_KEY = "contact"




 {/* <div>
            <input className="bg-gray-200" type="text" onChange={(e) => setsearch(e.target.value)}>
            </input>
            <button>Serach</button>
         </div>
         <h1>{id}</h1>
        <div className="flex flex-wrap justify-between">
        {allvideos.map((item , index) => 
        < div className="justify-between" key={index} >
        <iframe  className="w-96 h-80 mt-10" src={item.videolink}></iframe>
        <p className="w-96 ">Title - {item.snippet.title}</p>
        <button className="bg-black text-white" onClick={() => Remove()}>Remove</button>
        </div>
         )}
         </div> */}







    // import YoutubeVideo from "./YoutubeVideos";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addvideo } from "../utils/VideoSlice";
// import Playlist from "./Playlist";







    // const [allvideos , setallvideos] = useState([])
    // const {id} = useParams()
    
    // const APIKEY = "AIzaSyBlYe34vwc3hPZowkVOraACn0cFdjob1Ys"
    // const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&channelId=${search}&part=snippet,id&order=date&maxResults=5`
    // const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&channelId=${search}&part=snippet,id&order=date&maxResults=5`;

    // const fetchurl = search
    // ? `https://www.googleapis.com/youtube/v3/playlistItems?key=${APIKEY}&playlistId=${search}&part=snippet,id&maxResults=5`
    // : "";
    // useEffect(() => {
    //     fetch(fetchurl).then((response) => response.json()).then((resJson) =>{
    //         const result = resJson.items.map((doc) => ({
    //             ...doc,
    //             videolink: "https://www.youtube.com/embed/" + doc?.id?.videoId 
    //         }))    
    //         setallvideos(result)
    //         console.log(resJson);
    //         console.log(response);
    //     })    
    // } ,[search])    
    // console.log(allvideos);