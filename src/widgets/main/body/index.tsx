import {MainCards} from "@/features/cards";
import {useState} from "react";
import {MainPopup} from "@/features/popup";

export const MainBody = () => {
    const [isShow, setIsShow] = useState(false)
    const handleClick = () => setIsShow(true)
    const handlePopupClose = () => setIsShow(false)

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
                    <MainCards onClick={handleClick}/>
                    <MainPopup isShow={isShow} onClose={handlePopupClose}/>
                </div>
            </div>
        </div>
    )
}