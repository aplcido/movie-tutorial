import React,{useContext} from 'react'
import {img_300, unavailable} from "../../config/config"
import "./SingleContent.css"
import { Badge } from '@mui/material'
import { GlobalContext } from '../Context/GlobalState'

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    movie
  }) => {
    const { addMovieToWatched, watched} = useContext(GlobalContext);
    
    let storedMovie = watched.find(o => o.id === movie.id);

    const watchedDisabled = storedMovie ? true : false;
    const buttonClass = watchedDisabled ? "btndisabled" : "btn2";
    
    return (
      
     <div className="media">
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
        
        <button disabled={watchedDisabled} className={buttonClass} onClick={() => addMovieToWatched(movie)} >Add to Watched</button>
       
        </div>
        
    );
  };
  
export default SingleContent;