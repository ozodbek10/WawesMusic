import React from 'react'
import SidebarSong from '../SideBarSong/SideBarSong'
import './sideBar.scss'

const SideBar = ({songArray, setCurrentSong,openlibrary}) => {

    return(
        <div className={`Library ${openlibrary ? "": 'openLibrary'}`}>
            <h1>Library</h1>
            {songArray.map(el => {
                return(
                    <SidebarSong setCurrentSong={setCurrentSong} el={el} />
                )
            })}
        </div>
    )
}

export default SideBar;