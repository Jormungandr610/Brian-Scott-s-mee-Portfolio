import { useEffect, useState } from 'react';

import Walk_away_from_computer from "./Animations/WalkAwayFromComputer"
import Walk_to_computer from './Animations/WalkToComputer'


import Monitor from './Computer/Monitor';
import Desktop from './Computer/Desktop';

export default function Room({ onReady }) {
    const [onComputer, setOnComputer] = useState(false)
    const [didWalk, setWalk] = useState(false)
    


    useEffect(() => {
        onReady();
    }, [onReady]);

    useEffect(() => {

       setWalk(true)

    }, [onComputer])

    return (
        <main>
            
            <Monitor onComputer={onComputer} setOnComputer={setOnComputer}/>

            <>      {/* Animation for walking to and from the computer */}
                {didWalk && (
            
                    onComputer 
                    ? <Walk_to_computer/>
                    : <Walk_away_from_computer/>

                )}
            </>

            <Desktop onComputer={onComputer} setOnComputer={setOnComputer}/>
            
        </main>
    );
}