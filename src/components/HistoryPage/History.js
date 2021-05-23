import {useData,useAuth} from "../export"
import {getHistoryVideos,clearHistory} from "../../Utils/apiRequest"
import {HistoryVideosCard} from "./HistoryPageCard"
import "./history.css"

export const History = () => {

    const {state: { history,videoList},dispatch} = useData();
    const {userId,isUserloggedIn} = useAuth();

    
return (

    
    <div className="liked-videos-page-main-div">
        {history.length < 1 ? (<div><h1>No History !</h1></div>)
        :
        
        <div className="liked-videos-page-inner-div">
                
                <div>
            <h1>History Videos</h1> 
            <button 
            onClick={()=> clearHistory(userId,dispatch)}
            className="btn-clear-history">
            Clear All History
            </button>
            </div>
            <div>
            {history.map((_id) => (
                <HistoryVideosCard _id={_id} key={_id} />
            ))}
            </div>

        </div>}
   </div>

)
}