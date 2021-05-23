import "./videocard.css";
import { Link, useNavigate } from "react-router-dom";
import {useData} from "../export"
import {ViewCalculator,TimeCalculator} from "../../Utils/arrayFunctions"
import {useAuth} from "../Context/AuthProvider"
import {addtoHistory} from "../../Utils/apiRequest"
export const VideoCard = ({ _id }) => {

    const {state: { videoList, likedVideos },dispatch,} = useData();

    const navigate = useNavigate();

    const { vid, title,views,date, author, image } = videoList.find(
        (video) => video._id === _id
      );
      const { isUserloggedIn, userId } = useAuth();

       

    return (

        <Link 
        className="link-no-style" to={`/${_id}`}
        onClick={()=> 
          isUserloggedIn?addtoHistory(_id,userId,dispatch) :""
        } 
        
        >

        <div className="video-card-main-div">
         
         <div className="video-card-img-div">
             <img src={image} className="video-card-img"/>
         </div>

         <div className="video-card-info-div">
               <p className="video-card-title">{title}</p>
               <p className="video-card-author">{author}</p>
               <p className="video-card-views">{ViewCalculator({views})}
                 <span> • {TimeCalculator({date})}</span>
               </p>
               
         </div>

        </div>
        </Link>
    )


}