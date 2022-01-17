import React,{useContext} from 'react'
import { GlobalContext } from '../../components/Context/GlobalState'

export const WatchedControls = ({movie,type}) => {
    const {removeMovieFromWatched} = useContext(GlobalContext)
    return (
        <div className="inner-card-controls">
            <>
            {/* <button className="ctrl-btn">
            <i className="fa-fw far fa-eye"></i>
            </button> */}
            <button className="ctrl-btn" onClick={() => removeMovieFromWatched(movie.id)}>
                <i className="fa-fw fa fa-times"></i>
            </button>
            </>
            
        </div>
    )
}
