import { useEffect, useState, useRef } from 'react';

import Walk_away_from_computer from "../../public/Animations/WalkAwayFromComputer"
import Walk_to_computer from '../../public/Animations/WalkToComputer'


import Monitor from './Computer/Monitor';
import Desktop from './Computer/Desktop';

export default function Room({ onReady }) {

    const [onComputer, setOnComputer] = useState(false)
    
    const computerState = useRef(onComputer)
    const [firstWalk, setWalk] = useState(false)
    

    // Tells when the page is loaded and passes such infomation to the loading page

    useEffect(() => {
        onReady();
    }, [onReady]);

    // Stops the first load to play the video

    useEffect(() => {
        if(computerState.current !== onComputer){
            setWalk(true)
        }
    }, [onComputer])


    return (
        <main>
            
            <Monitor onComputer={onComputer} setOnComputer={setOnComputer}/>

            <>      {/* Animation for walking to and from the computer */}
                {firstWalk && (
            
                    onComputer 
                    ? <Walk_to_computer/>
                    : <Walk_away_from_computer/>

                )}
            </>

            <Desktop onComputer={onComputer} setOnComputer={setOnComputer}/>
            
        </main>
    );
}