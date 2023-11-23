import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NewPlaylistShow from "./newplaylist";

const Playlist = () => {
  const [data, setData] = useState([]);
  const [inputvalue, setinputValue] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("playlists")) || [];
    setData(storedData);
  }, []);

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPlaylist = { Playlist: inputvalue, id: Date.now(), videos: [] };
    setData((prevData) => [...prevData, newPlaylist]);
    setinputValue("");
    const storedData = JSON.parse(localStorage.getItem("playlists")) || [];
    localStorage.setItem("playlists", JSON.stringify([...storedData, newPlaylist]));
  };

  const removed = (id) => {
    const update = data.filter((playlist) => playlist.id !== id);
    localStorage.removeItem("playlists");
    setData(update);
  };

  console.log(data);
  

  return (
    <>  
      <div>
        <h1>Playlists:-</h1>
        <h1>Total Playlist:- {data.length}</h1>
        <ul>
          {data.map((item) => (
            <div className="mt-10 w-32 h-24" key={item.id}>
              <Link to={"/playlist/" + item.id}>
                <li className="w-32 h-24 bg-gray-100" key={item.id}>
                  {item.Playlist}
                </li>
              </Link>
              <button className="bg-red-500 text-white " onClick={() => removed(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <label>
          Create New Playlist :
          <input type="text" value={inputvalue} onChange={handleInputChange}></input>
          <button className="bg-green-400" onClick={handleFormSubmit}>
            Create
          </button>
        </label>
      </div>
      <NewPlaylistShow data={data} />
        </>
  );
};

export default Playlist;
