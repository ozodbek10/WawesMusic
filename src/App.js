import React, { useState } from 'react'
import Song from './components/Song/Song'
import Player from './components/Player/Player'
import SideBar from './components/SideBar/SideBar'
import './components/styles/App.scss'
import Data from './data'

function App() {
    const [songArray, setSongArray] = useState(Data())
    const [currentSong, setCurrentSong] = useState(songArray[0])
    const [isPlaying, setIsplaying] = useState()
    const [openlibrary, setOpenLibrary] = useState(false)
     
    return(
        <div className="App">
            <Song
              openlibrary={openlibrary}
              setOpenLibrary={setOpenLibrary}
              currentSong={currentSong}
            />
            <Player
             currentSong={currentSong}
             isPlaying={isPlaying}
             setIsplaying={setIsplaying} 
             setCurrentSong={setCurrentSong}
             songArray={songArray}
              />
            <SideBar  setCurrentSong={setCurrentSong} songArray={songArray}/>
            <SideBar
            openlibrary={openlibrary}
            setCurrentSong={setCurrentSong}
            songArray={SongArray}
            />
        </div>
    )
}

export default App
