import React from 'react'
import SideBar from '../SideBar/SideBar';
import './SideBarSong.scss'

const SideBarSong = ({ el , setCurrentSong}) =>{
    function Change() {
        setCurrentSong(el)
    }

    return(
        <div>
            <div onClick={Change} className="bar">
                <div  className="image">
                    <img src={el.cover}></img>
                </div>
                <div>
                    <h3>{el.name}</h3>
                    <p>{el.artist}</p>
                </div>
            </div>
        </div>
    )
}

export default SideBarSong