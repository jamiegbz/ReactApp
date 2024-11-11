
//buttons 
//add
//update
//remove


type TopbarButtonProps = { 
    icon: string, 
    onClick: () => void 
}


export default function TopbarButton({ icon, onClick }: TopbarButtonProps){


    return (
            <button 
                className="btn btn-outline-light me-2" 
                onClick={onClick}
            > 
                <img src={icon} style={{ width: "2rem" }}/>
            </button>
    )
}