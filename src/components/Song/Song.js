import React from 'react'
import './song.scss'

const Song = ({currentSong, setOpenlibrary,Openlibrary}) => {
     function  handlerClick () {
         setOpenlibrary=(!openlibrary)
     }
    return(
        <div>
            <div className="wawes">
                <h2  className="h2">Waves</h2>
                <button  onClick={handlerClick}  className="btn">Libary</button>
            </div>
            <div className="songContainer">
                <img src={currentSong.cover}></img>
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
            </div>

    )
}

export default Song