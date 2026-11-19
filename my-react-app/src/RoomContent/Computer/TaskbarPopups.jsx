import {useState} from 'react'

export default function TaskbarPopups(){
    const [taskbar_popup, setTaskbarPopup] = useState([]);


    function addPopUp(icon){
        if (!taskbar_popup.includes(icon)) {
            setTaskbarPopup(currPopups => [...currPopups, icon])
        }
}
    function removePopUp(icon){
        setTaskbarPopup(currPopups => [...currPopups.filter((popup) => popup !== icon)])
    }

    return(
        addPopUp,
        removePopUp
    )
}


