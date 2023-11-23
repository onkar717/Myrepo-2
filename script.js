import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components.js/Header";
import Playlist from "./src/components.js/Playlist";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NewPlaylistShow from "./src/components.js/newplaylist";
import YoutubeVideo from "./src/components.js/YoutubeVideos";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Test from "./test";



const Applaout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet  />
    </Provider>
  );
};
const approuter = createBrowserRouter([

  {
    path: "/",
    element: <Applaout />,
    children: [
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path:'/playlist/:id',
        element: <NewPlaylistShow/>
      },
      {
        path: "/",
        element: <YoutubeVideo />
      },
      {
        path: "/Test",
        element: <Test />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
