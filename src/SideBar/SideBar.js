import  "./sidebar.css";
import { Link } from "react-router-dom";


export const SideBar = () => {

    return (
        <>
       <div className="sidebar-main-div">
             
       <Link to="/">
             <div className="trendig-logo">
             <i class="fas fa-home"><span> Home</span></i>
             </div>
        </Link>

             <div className="trendig-logo">
             <i class="fas fa-fire"><span> Trending</span></i>
             </div>
             
             <div className="trendig-logo">
             <i class="fas fa-list"><span> PlayList</span></i>
             </div>

             <div className="trendig-logo">
             <i class="fas fa-thumbs-up"><span> Liked Videos</span></i>
             </div>
             
             <div className="trendig-logo">
             <i class="fas fa-history"><span> History</span></i>             
             </div>

             <div className="trendig-logo">
             <i class="far fa-clock"><span> Watch Later</span></i>            
             </div>
       </div>
        </>
    )
}