import Walk_to_computer from '../Animations/WalkToComputer'

export default function Monitor({onComputer, setOnComputer}){


    return (
        <>
            <div
            className="monitor" 
            onClick={() => { 
                setOnComputer(true)
            }}>
                <img src="" alt="Computer"/>
            </div>

        
                {onComputer && <Walk_to_computer />}
        </>

    )
}






