import { useEffect, useState } from "react"
import Walk_away_from_computer from "../Animations/WalkAwayFromComputer"
import Project1 from 
import Project2 from 
import Project3 from 
import Project4 from 



export default function Desktop({onComputer, setOnComputer}){

    const [viewingProject1, setView1] = useState(false)
    const [viewingProject2, setView2] = useState(false)
    const [viewingProject3, setView3] = useState(false)
    const [viewingProject4, setView4] = useState(false)

    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [dragging, setDragging] = useState(false);


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
                    className="screen">
                        <div 
                        className="icons">

                                                                        {/* project 1 */}
                            <img
                            id="project1"
                            src="j" 
                            alt="Project" 
                            onDoubleClick={setView1(true)}
                            draggable={false}
                            onPointerDown={(event) => {
                                setDragging(true);
                                event.currentTarget.setPointerCapture(event.pointerId);
                            }}
                            onPointerMove={(event) => {
                                if (dragging) {
                                    setPosition({
                                        x: event.clientX - 50,
                                        y: event.clientY - 50
                                    });
                                }
                            }}
                            onPointerUp={() => setDragging(false)}
                            style={{
                                position: 'fixed',
                                left: position.x,
                                top: position.y,
                                width: '100px',
                                cursor: dragging ? 'grabbing' : 'grab',
                                touchAction: 'none',
                                userSelect: 'none'
                            }}/>
                               
                               
                                                                        {/* project 2 */}
                            <img
                            id="project2"
                            src="j" 
                            alt="Project" 
                            onDoubleClick={setView2(true)}
                            draggable={false}
                            onPointerDown={(event) => {
                                setDragging(true);
                                event.currentTarget.setPointerCapture(event.pointerId);
                            }}
                            onPointerMove={(event) => {
                                if (dragging) {
                                    setPosition({
                                        x: event.clientX - 50,
                                        y: event.clientY - 50
                                    });
                                }
                            }}
                            onPointerUp={() => setDragging(false)}
                            style={{
                                position: 'fixed',
                                left: position.x,
                                top: position.y,
                                width: '100px',
                                cursor: dragging ? 'grabbing' : 'grab',
                                touchAction: 'none',
                                userSelect: 'none'
                            }}/>


                                                                        {/* project 3 */}
                            <img
                            id="project3"
                            src="j" 
                            alt="Project" 
                            onDoubleClick={setView3(true)}
                            draggable={false}
                            onPointerDown={(event) => {
                                setDragging(true);
                                event.currentTarget.setPointerCapture(event.pointerId);
                            }}
                            onPointerMove={(event) => {
                                if (dragging) {
                                    setPosition({
                                        x: event.clientX - 50,
                                        y: event.clientY - 50
                                    });
                                }
                            }}
                            onPointerUp={() => setDragging(false)}
                            style={{
                                position: 'fixed',
                                left: position.x,
                                top: position.y,
                                width: '100px',
                                cursor: dragging ? 'grabbing' : 'grab',
                                touchAction: 'none',
                                userSelect: 'none'
                            }}/>

                                                                        {/* project 4 */}
                            <img
                            id="project4"
                            src="j" 
                            alt="Project" 
                            onDoubleClick={setView4(true)}
                            draggable={false}
                            onPointerDown={(event) => {
                                setDragging(true);
                                event.currentTarget.setPointerCapture(event.pointerId);
                            }}
                            onPointerMove={(event) => {
                                if (dragging) {
                                    setPosition({
                                        x: event.clientX - 50,
                                        y: event.clientY - 50
                                    });
                                }
                            }}
                            onPointerUp={() => setDragging(false)}
                            style={{
                                position: 'fixed',
                                left: position.x,
                                top: position.y,
                                width: '100px',
                                cursor: dragging ? 'grabbing' : 'grab',
                                touchAction: 'none',
                                userSelect: 'none'
                            }}/>
                        </div>

                        {viewingProject1 && (
                            <Project1/>
                        )}

                        {viewingProject2 && (
                            <Project2/>
                        )}

                        {viewingProject3 && (
                            <Project3/>
                        )}

                        {viewingProject4 && (
                            <Project4/>
                        )}

                    </div>

                </div>
            )}


                {!onComputer && <Walk_away_from_computer/>}
        </>
    )
}