import {Navigation,useData} from "../export"
import "./home.css"
import {getFilteredVideos} from "../../Utils/arrayFunctions"
import {VideoCard} from "./VideoCard"



export const Home = () => {



    const {
        state: { videoList, searchValue, categoryFilter },
      } = useData();

    const filteredVideos = getFilteredVideos(
        videoList,
        searchValue,
        categoryFilter
      );
    


return (

    <div className="home-main-div">

   <div className="navigation-main-div">
       <Navigation/>
       </div>

       {/* video list */}
  <div className="videolist-main-div">
  {filteredVideos.map((video) => (
          <VideoCard key={video._id} _id={video._id} />
        ))}
  </div>

  {filteredVideos.length === 0 && (
        <>
          <h3>Video is not available!</h3>
        </>
      )}


    </div>
)

}