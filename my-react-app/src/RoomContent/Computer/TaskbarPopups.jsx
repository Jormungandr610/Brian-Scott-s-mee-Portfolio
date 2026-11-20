import {useState} from 'react'

export default function useTaskbarPopups(){
    const [taskbar_popups, setTaskbarPopup] = useState([]);


    function addPopUp(icon){
        if (!taskbar_popups.includes(icon)) {
            setTaskbarPopup(currPopups => [...currPopups, icon])
        }
}
    function removePopUp(icon){
        setTaskbarPopup(currPopups => [...currPopups.filter((popup) => popup !== icon)])
    }

    return{
        addPopUp,
        removePopUp,
        taskbar_popups
    }
}


