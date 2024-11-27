
//import from startList.tsx
import StartList from "./StartList"
import type { List } from "./types"


//props
type ItemlistProp = {
  lists: Array<List>
  selectedListId : number
  setSelectedListId: (newValue: number) => void
  deleteList: (id: number) => void
}


export default function ItemList({
  lists, 
  selectedListId, 
  setSelectedListId, 
  deleteList
}: ItemlistProp) {

  const handleListClick = (id: number) => {
    setSelectedListId(id)
  }

  return(
    <div className="border-end bg-light p-5 d-flex flex-column">
      {lists.map(l => 
        <StartList 
          key ={l.id} 
          list={ l } 
          onListSelected={handleListClick} 
          isSelected={l.id === selectedListId}
          deleteList={deleteList}
          /> 
          )}
    </div>
  )

}