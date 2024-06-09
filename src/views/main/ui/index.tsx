import {MainHeader} from "@/widgets/main/header";
import {MainCards} from "@/widgets/main/cards";
import {MainPopup} from "@/widgets/main/popup";
import {useState} from "react";

export const Main = () => {

    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(true)

    return (
        <div className='bg-amber-400'>
            <MainHeader/>
            <MainCards onClick={handleClick}/>
            <MainPopup status={open}/>
        </div>
    )
}