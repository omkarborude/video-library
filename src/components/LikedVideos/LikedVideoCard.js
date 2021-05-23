import {useData,useAuth} from "../export"
import { useNavigate, useParams } from "react-router";
import "./likedvideos.css"
import {ViewCalculator,TimeCalculator} from "../../Utils/arrayFunctions"
import {addRemoveLikedVideo} from "../../Utils/apiRequest"

const ProductsArryExist = (array, id) => array.some((item) => item === id);



export const LikedVideosCard = ({_id}) => {
    const navigate = useNavigate();
    const { videoId } = useParams();

    const {state: { videoList },dispatch,likedVideos} = useData();
    
    const {userId,isUserloggedIn} = useAuth();

    const {  title, url, views, date, author, image } = videoList.find(
        (item) => item._id === _id
      );

    return (
        <div className="liked-videos-card-div">
            <div className="liked-videos-card-img-div">
                 <img 
                 src={image}
                 className="liked-videos-img"/>
            </div>

            <div className="liked-videos-card-info-div">
                 <p className="liked-videos-info-title">{title}</p>
                 <p className="liked-videos-info-author">Author:
                  <span> {author}</span></p>
                 <p className="liked-videos-info-views">
                     Views: <span>{ViewCalculator({views})}</span>
                 </p>
                 <p className="liked-videos-info-date">{date}</p>
            </div>

            <div className="btn-liked-videos-remove">
            <i class="fas fa-times"
            onClick={() => isUserloggedIn ?
                addRemoveLikedVideo(_id, userId, dispatch)
                :navigate("/login")}
              
            ></i>
            </div>
        </div>
    )
}