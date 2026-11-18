

export default function Project1({viewingProject1, setView1}, {activePopup1, setPopup1}){
    return(
      
        <div 
        className="project-page">

            <div
            className="exitingbuttons">

                <button
                className="minimizeproject"
                onClick={() =>
                    setView1(false)
                    
                    }>
                        -
                </button>

                <button
                className="strinkproject"
                onClick={() =>
                    setView1(false)
                    }>
                        []
                </button>

                <button
                className="exitproject"
                onClick={() =>
                    setView1(false)
                    }>
                        X
                </button>

            </div>

            <div 
            className="contentbox">

                <div
                className="titlebar">

                    <h2>Title</h2>

                    <a 
                    href=""
                    className="documention_button">
                        <button>Documention</button>
                    </a>

                    <a
                    href=""
                    className="code_button">
                        <button>Code</button>
                    </a>

                </div>

                <div 
                className="sidescroll">

                    <video
                    className="trailer"
                    src=""
                    autoPlay
                    loop
                    />

                    <img
                    className="screenshot1"
                    src=""
                    alt=""
                    />

                    <img
                    className="screenshot2"
                    src=""
                    alt=""
                    />

                    <img
                    className="screenshot3"
                    src=""
                    alt=""
                    />

                    <img
                    className="screenshot4"
                    src=""
                    alt=""
                    />

                    <img
                    className="screenshot5"
                    src=""
                    alt=""
                    />

                </div>

                <div
                className="rating">
                    
                    <img
                    src=""
                    alt=""
                    />

                    <p>(Success after publish)</p>

                </div>

                <div
                className="description">

                    <img
                    src=""
                    alt=""
                    />

                    <div
                    className="descriptionTXT">

                    <p>Description</p>

                    <h6>Applacation Type</h6>
                    <p></p>

                    <h6>Published Date</h6>
                    <p></p>
                    </div>

                </div>

                <div
                className="launch">
                    <a
                    href="">
                        <button>Launch title's site</button>
                    </a>
                        
                </div>

                <div
                className="conception">

                    <h3>Process of Creation</h3>
                    <p></p>

                </div>

            </div>

        </div>
        
       
    )
}