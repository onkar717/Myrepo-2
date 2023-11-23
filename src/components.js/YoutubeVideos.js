import React, { useEffect, useState } from "react";



const APIKEY = "AIzaSyBlYe34vwc3hPZowkVOraACn0cFdjob1Ys";
const channelid = "UCeVMnSShP_Iviwkknt83cww";
const fetchurl = `https://www.googleapis.com/youtube/v3/playlists?key=${APIKEY}&channelId=${channelid}&part=snippet,id&order=date&maxResults=15`;

const YoutubeVideo = () => {
  const [allvideos, setallvideos] = useState([]);
  const [dropdownStates, setDropdownStates] = useState([]);

  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          // Videolink: "https://www.youtube.com/embed/" + doc?.id?.videoId,
        }));
        setallvideos(result);
        setDropdownStates(Array(result.length).fill(false)); // Initialize states for each video
      });
  }, []);

  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  console.log(allvideos);

  return (
    <>
      <div className="flex justify-center gap-8 flex-wrap ">
        {allvideos.map((item, index) => (
          <div key={item.id}>
            <img className="w-80" src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
            <p className="w-80 "> Title - {item.snippet.title}</p>
            <p>Video_Id -: {item.id}</p>
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => toggleDropdown(index)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
              >
                ADD to Playlist
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l-1 1-4-4 1-1.5L10 9l4-4 1 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownStates[index] && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="/option1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Option 1
                    </a>
                    <a
                      href="/option2"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Option 2
                    </a>
                    <a
                      href="/option3"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Option 3
                    </a>
                    <a
                      href="/option3"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Option 3
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default YoutubeVideo;