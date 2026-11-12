import { useEffect, useState } from "react"


import Project1 from './Projects/Project1'
import Project2 from './Projects/Project2'
import Project3 from './Projects/Project3'
import Project4 from './Projects/Project4'



export default function Desktop({onComputer, setOnComputer}){

    const [viewingProject1, setView1] = useState(false)
    const [viewingProject2, setView2] = useState(false)
    const [viewingProject3, setView3] = useState(false)
    const [viewingProject4, setView4] = useState(false)

    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [position, setPosition] = useState({ x: 100, y: 100 });
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
            
                    <img src="" alt="Close up on Monitor"/>
                    
                    <div 
                    className="screen">
                        <div 
                        className="icons">

                                                                        {/* project 1 */}
                            <img
                            id="project1"
                            src="" 
                            alt="Project1" 
                            onDoubleClick={() => {setView1(true)}}
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
                            src="" 
                            alt="Project2" 
                            onDoubleClick={() => {setView2(true)}}
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
                            src="" 
                            alt="Project3" 
                            onDoubleClick={() => {setView3(true)}}
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
                            src="" 
                            alt="Project4" 
                            onDoubleClick={() => {setView4(true)}}
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
               
        </>
    )
}