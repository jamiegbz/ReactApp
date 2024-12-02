//this is where item will be added
//removed
//updated
///toolbar


import { useState } from "react"



export default function ItemCard(){
    //USED state to expand sidebar
    const [isExpanded, setIsExpanded] = useState(true)

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <>
            {isExpanded ? (
                <div
                    className=" bg-light p-3 border-bottom"
                    
                    >
                        SHOPPING LIST:
                        list all Items
                </div>
                
            ) : null }
            <button 
                className="btn btn-light p-1 border" 
                onClick ={handleButtonClick}
                > 
                { isExpanded ? "<" : ">" }
            </button>
        </>
    )
}