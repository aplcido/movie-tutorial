import React, {useContext} from "react"
import { GlobalContext } from "../../components/Context/GlobalState"
import { WatchedCard } from "./WatchedCard";

export const Watched = () => {
    const {watched} = useContext(GlobalContext); 
    return (
        <div>
        <span className='pageTitle'>Watched</span>
        
            <div className="movie-page">
                
      <div className="container">
       

         

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <WatchedCard key={movie.id} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
    </div>
  
        //     {/* {watched.length > 0 ? (
        //   <div>
        //     {watched.map((movie) => (
        //       <SingleContent key={movie.id} id={movie.id} poster={movie.poster_path} title={movie.title || movie.name} date={movie.first_air_date || movie.release_date} media_type={movie.media_type} vote_average={movie.vote_average} movie={movie} />
        //     ))}
        //   </div>
        // ) : (
        //   <h2 className="no-movies">No movies in your list! Add some!</h2>
        // )} */}
        
    )
}

export default Watched;
