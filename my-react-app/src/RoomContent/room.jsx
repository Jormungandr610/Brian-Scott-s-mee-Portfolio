import { useEffect, useState } from 'react';

import Monitor from './Computer/Monitor';
import Desktop from './Computer/Desktop';

export default function Room({ onReady }) {
    const [onComputer, setOnComputer] = useState(false)
    


    useEffect(() => {
        onReady();
    }, [onReady]);

    return (
        <main>
            <Monitor onComputer={onComputer} setOnComputer={setOnComputer}/>

            <Desktop onComputer={onComputer} setOnComputer={setOnComputer}/>
            
        </main>
    );
}