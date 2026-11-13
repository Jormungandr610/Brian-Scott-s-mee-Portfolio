import { useState } from "react"
import video from './videoplayback.mp4'


export default function Walk_away_from_computer(){

    const [playing, setPlaying] = useState(true)

    return(
        <>
            {playing && (
                <video
                className="walk_away_from_computer"
                src={video}
                autoPlay
                onEnded={() => {
                    setPlaying(false)
                }} />
            )}
        </>  
    )
}