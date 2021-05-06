import { useParams } from "react-router-dom";
import { useData } from "../DataProvider/DataProvider";
import "./videoplayer.css"


export const VideoPlayer = () => {


    const { videoId } = useParams();
    const { data } = useData();

    const video = data.find((video) => video.id === parseInt(videoId));

    return (
        <div className='video'>
        
        <iframe
          width='100%'
          height='500px'
        //   title={video.name}
          src={video.url}
        ></iframe>
            <p>{video.date}</p>
        </div>

    )
}