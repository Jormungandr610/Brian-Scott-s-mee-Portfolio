import { useState, useEffect } from 'react'

export default function loadingPage(){

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if(document.readyState === 'complete'){
            setLoading(false)
        }
        else{
            window.addEventListener('load', stopLoading)
        }

        return () => {
            window.removeEventListener('load', stopLoading)
        }


        function stopLoading(){
            setLoading(false)
        }
    }, [])

    if(loading){
        <page 
        className='loadingScreen'>

        <h1>Make sure to turn your volume up if you may wish to hear me!</h1>
        <h4>unless you don't wish to hear me I suppose...</h4>

        <img src=''/>
        </page>
    }

    
}
