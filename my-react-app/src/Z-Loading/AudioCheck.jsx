
import { useState, useEffect } from 'react';
import Room from '../RoomContent/room';
// import blank from '../RoomContent/A-Background'
// import blank from '../RoomContent/Clanker_Me'
// import blank from '../RoomContent/Computer'
// import blank from '../RoomContent/Diary'
// import blank from '../RoomContent/Skill&Knowledge'
// import blank from '../RoomContent/Z-RandomDecor'


export default function LoadingPage() {
    const [loading, setLoading] = useState(true);
    const [roomReady, setRoomReady] = useState(false);
    const [fullscreen, setFullscreen] = useState(false)
    const [requestTxt, setTxt] = useState(
        'Please transition into full screen for the intended experiance!'
    )


    useEffect(() => {
        async function checkLoading() {

            const minimumWaitTime = new Promise(resolve => {
                setTimeout(resolve, 10);
            });

            // Wait for the browser's initial resources.
            if (document.readyState !== 'complete') {
                await new Promise(resolve => {
                    window.addEventListener('load', resolve, { once: true });
                });
            }

            // Wait for images currently in the document.
            const images = Array.from(document.images);

            await Promise.all(
                images.map(image => {
                    if (image.complete) {
                        return Promise.resolve();
                    }

                    return new Promise(resolve => {
                        image.addEventListener('load', resolve, { once: true });
                        image.addEventListener('error', resolve, { once: true });
                    });
                })
            );

            // Wait for fonts.
            await document.fonts.ready;

            // Only remove the loading screen when Room has rendered too.
            if (roomReady && fullscreen) {
                await minimumWaitTime;
                setLoading(false);
            }
        }

        checkLoading();

    }, [roomReady, fullscreen]);

    return (
        <>
            <div style={{ display: loading ? 'none' : 'block' }}>
                <Room onReady={() => setRoomReady(true)} />
            </div>


            {/* loading screen meat / display*/}
            {loading && (
                <div className="loadingScreen">
                    <h1>Make sure to turn your volume up!</h1>
                    <h4>Unless you don't wish to hear me, I suppose...</h4>

                    <img src="/images/loading.gif" alt="Loading..." />

                    {/* the request for fullscreen activaction */}
                    <button 
                    className='fullscreenRequest'
                    onClick={() => {
                        document.documentElement.requestFullscreen()
                        setFullscreen(true)
                        setTxt(requestTxt ===
                            'Please transition into full screen for the intended experiance!'
                            ? 'Thank you!'
                            : requestTxt)
                    }}>
                        {requestTxt}
                    </button>
                </div>
            )}
        </>
    );
}
