import React from "react";
import Test from "../../test";


const NewPlaylistShow = ({ data }) => {
  // const {id} = useParams()
  // if (!data) {
  //   return <div>Loading...</div>; // You can customize this loading state
  // }

  const meta = [
    {
      id:12345,
      name: "Onkar"
    }
  ]

  return(
    <>
    <div>
  {/* <h1>{data.Playlist}</h1> */}
    <Test meta={meta} />
    </div>
    </>
  )

}


export default NewPlaylistShow;