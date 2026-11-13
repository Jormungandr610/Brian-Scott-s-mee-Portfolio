import { useState } from "react"
import video from './videoplayback.mp4'

export default function Walk_to_computer(){

    const [playing, setPlaying] = useState(true)

    return(
        <>
            {playing && (
                <video
                className="walk_to_computer"
                src={video}
                autoPlay
                onEnded={() => {
                    setPlaying(false)
                }} />
            )}
        </>  
    )
}