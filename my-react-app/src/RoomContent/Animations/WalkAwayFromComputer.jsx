import { useState } from "react"

export default function Walk_away_from_computer(){

    const [playing, setPlaying] = useState(true)

    return(
        <>
            {playing && (
                <video
                className="walk_away_from_computer"
                src=""
                autoPlay
                onEnded={() => {
                    setPlaying(false)
                }} />
            )}
        </>  
    )
}