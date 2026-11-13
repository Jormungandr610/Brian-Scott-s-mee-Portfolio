import { useEffect, useState } from "react"


import Project1 from './Projects/Project1'
import Project2 from './Projects/Project2'
import Project3 from './Projects/Project3'
import Project4 from './Projects/Project4'

import Clock from './ActiveClock.jsx'



export default function Desktop({onComputer, setOnComputer}){


    const [viewingProject1, setView1] = useState(false)
    const [viewingProject2, setView2] = useState(false)
    const [viewingProject3, setView3] = useState(false)
    const [viewingProject4, setView4] = useState(false)

    const [activePage1, setPage1] = useState(false)
    const [activePage2, setPage2] = useState(false)
    const [activePage3, setPage3] = useState(false)
    const [activePage4, setPage4] = useState(false)



    const taskbar_popup = []

    const [position1, setPosition1] = useState({ x: 100, y: 100 });
    const [position2, setPosition2] = useState({ x: 150, y: 100 });
    const [position3, setPosition3] = useState({ x: 200, y: 100 });
    const [position4, setPosition4] = useState({ x: 250, y: 100 });

    const [dragging, setDragging] = useState(false);


    //exiting the desktop
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

    useEffect(() => {
        
    }, [])



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
                                    setPosition1({
                                        x: event.clientX - 50,
                                        y: event.clientY - 50
                                    });
                                }
                            }}
                            onPointerUp={() => setDragging(false)}
                            style={{
                                position: 'fixed',
                                left: position1.x,
                                top: position1.y,
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
                                    setPosition2({
                                        x: event.clientX - 50,
                                        y: event.clientY - 50
                                    });
                                }
                            }}
                            onPointerUp={() => setDragging(false)}
                            style={{
                                position: 'fixed',
                                left: position2.x,
                                top: position2.y,
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
                                    setPosition3({
                                        x: event.clientX - 50,
                                        y: event.clientY - 50
                                    });
                                }
                            }}
                            onPointerUp={() => setDragging(false)}
                            style={{
                                position: 'fixed',
                                left: position3.x,
                                top: position3.y,
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
                                    setPosition4({
                                        x: event.clientX - 50,
                                        y: event.clientY - 50
                                    });
                                }
                            }}
                            onPointerUp={() => setDragging(false)}
                            style={{
                                position: 'fixed',
                                left: position4.x,
                                top: position4.y,
                                width: '100px',
                                cursor: dragging ? 'grabbing' : 'grab',
                                touchAction: 'none',
                                userSelect: 'none'
                            }}/>
                        </div>

                        {viewingProject1 && (
                            <Project1 viewingProject1={viewingProject1} setView1={setView1}/>

                        )}

                        {viewingProject2 && (
                            <Project2 viewingProject2={viewingProject2} setView2={setView2}/>
                        )}

                        {viewingProject3 && (
                            <Project3 viewingProject3={viewingProject3} setView3={setView3}/>
                        )}

                        {viewingProject4 && (
                            <Project4 viewingProject4={viewingProject4} setView4={setView4}/>
                        )}

                        

                        <div
                        className="taskbar">

                            

                            <Clock/>

                        </div>

                    </div>

                </div>

            )}
               
        </>
    )
}