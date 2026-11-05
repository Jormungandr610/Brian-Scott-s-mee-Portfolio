import { useState } from "react"

export default function Walk_to_computer(){

    const [playing, setPlaying] = useState(true)

    return(
        <>
            {playing && (
                <video
                className="walk_to_computer"
                src=""
                autoPlay
                onEnded={() => {
                    setPlaying(false)
                }} />
            )}
        </>  
    )
}