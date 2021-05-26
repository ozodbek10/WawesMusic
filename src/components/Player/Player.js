import React, { useState, useRef } from 'react'
import './player.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faPause,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'



const Player = ({currentSong, isPlaying, setIsplaying}) =>{
    let audio = useRef("")
    const [time, setTime] = useState({
        current: 0,
        duration: 0
    })
    function handleClick() {
        // let audio = document.getElementById( "music");
        setIsplaying(!isPlaying)
        if (isPlaying) {
            audio.current.pause()

            // setIsplaying(false)
    
        }else{
            // setIsplaying(true)
            audio.current.play()

        }
    }
    function secondsToTime(e){
        var h = Math.floor(e / 3600).toString().padStart(2,'0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
            s = Math.floor(e % 60).toString().padStart(2,'0');
        
        return  m + ':' + s;
    }
   
    function handlerTimeUpdate() {
        let current= audio.current.currentTime
        let duration= audio.current.duration
        setTime({...time,current:current ,duration:duration})
        
        
    }
    let input = useRef("")
    function handlerChange(e) {
        console.log(e.target.value)
        audio.current.currentTime = e.target.value
    }

    function skipSonghandler() {
        let indexsong = arraySong.findIndex( i => i.id === currentSong.id )
        console.log(indexsong);
        setCurrentSong(arraySong[indexsong + 1])
    }
    return(
        <div className="player">
            <div className="time-control">
                <p>{secondsToTime(time.current)}</p>
                <input type="range"
                ref={input}
                    onChange={handlerChange}
                    min={0}
                    max={time.duration}
                    value={time.current}
                    />
                <p>{secondsToTime(time.duration)}</p>
            </div>
            <div className="controller">
                <audio id="music" src={currentSong.audio}></audio>
                <FontAwesomeIcon size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={handleClick} size="2x" icon={isPlaying ? faPause : faPlay } />
                <FontAwesomeIcon onClick={skipSonghandler} size="2x" icon={faAngleRight} />
            </div>
            <audio
              onLoadedData={handlerTimeUpdate}
              onTimeUpdate={handlerTimeUpdate}
             ref={audio}
             
              src={currentSong.audio}>

              </audio>
        </div>
    )
}

export default Player