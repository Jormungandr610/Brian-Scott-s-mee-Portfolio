import { useState } from "react"

const [playing, setPlaying] = useState(false)

export default function walk_to_computer(){
    const [playing, setPlaying] = useState(true)
    return(

        <>
            {playing && (
                <video
                src=""
                autoPlay
                onEnded={() => {
                    setPlaying(false)
                }} />
            )}
        </>
        
    )
}