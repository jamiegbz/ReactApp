import type { List } from "./types"

type ListThumbnailProps = { 
    list: List
    isSelected: boolean
    onListSelected: (id: number) => void
    deleteList: (id: number) => void
}


export default function StartList({ 
    list, 
    isSelected, 
    onListSelected, 
    deleteList 
}: ListThumbnailProps){
    return (
      <div>
            <div className="d-flex justify-content-between mt-2 mb-1 align-items-center">
                <span>{ list.order }</span>
                <button 
                    className="btn btn-sm btn-outline-danger" 
                    onClick={() => deleteList(list.id)}
                > x </button>
            </div>
            <img
                src = {list.image}
                style={{width: "4rem" }} 
                onClick={() => onListSelected(list.id)}
                className={isSelected ? "border border-primary" : ""}
            /> 
     </div>
    )
}
    

