import { useData } from "../DataProvider/DataProvider";
import { Link } from "react-router-dom";
import {TimeCalculator , ViewCalculator} from "../ViewsDateCalc/ViewDateCal"
import "./videolisting.css"




export const VideoListing = () => {
    const { latestData } = useData();

return (

    <div className="main-middle-div">
        {latestData.map((video) => {
            return (
               
                <Link to={`video/${video.id}`}>
                <div className="card">
                    <img src={video.thumbnail} style={{width:"100%"}}/>
                    <h4 className="video-name">{video.name}</h4>
                  
                  
                    <p className="channel-name">{video.channelName}</p>
                    <p className="video-views">{<ViewCalculator views={video.views} />}  • <p>
                         {<TimeCalculator date={video.date} />}</p> </p>
                </div>
                </Link>
            )
        })}
    </div>
)

}


