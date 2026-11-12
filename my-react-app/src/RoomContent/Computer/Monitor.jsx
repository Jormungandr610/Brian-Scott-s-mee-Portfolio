
export default function Monitor({onComputer, setOnComputer}){

    console.log({onComputer})
    return (
        <>

            {!onComputer && (
                <div
                className="monitor" 
                onClick={() => { 
                    setOnComputer(true)
                }}>
                    <img src="" alt="Computer"/>
                </div>
            )}
            
        </>

    )
}






