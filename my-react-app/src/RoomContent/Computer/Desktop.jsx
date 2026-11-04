import { useEffect } from "react"


export default function Desktop({onComputer, setOnComputer}){

    useEffect(() => {
        function stepBackFromComputer(back){
            if(back.key === 'b' || back.key === 'B'){
                setOnComputer(false)
            }
        }

        window.addEventListener('keydown', stepBackFromComputer)

        return() => {
            window.removeEventListener('keydown', stepBackFromComputer)
        }
    }, [setOnComputer])


    return(


        <>
            {onComputer && (
                

                <div 
                className="monitor_close_up">

                    <img src="j" alt="Close up on Monitor"/>

                    <div 
                    className="icons">
                        <img src="j" alt="Close up on Monitor"/>
                        <img src="j" alt="Close up on Monitor"/>
                        <img src="j" alt="Close up on Monitor"/>
                        <img src="j" alt="Close up on Monitor"/>
                    </div>

                </div>

                )}
        </>
    )
}