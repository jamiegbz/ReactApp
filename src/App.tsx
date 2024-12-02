
//A shopping app that allows you to add/remove/update items in your cart

//import is used to import other tsx, state and images
import ItemCard from "./Sidebar";
import Sidebar from "./Itemlist"
import Topbar from "./Topbar";
import EmptyCart from "./assets/emptyCart.svg";
import { useEffect, useState } from "react";
import Purse from "./assets/Purse.webp";
import Console from "./assets/console.avif";
import Car from "./assets/BMWCar.avif"
import type { List } from "./types";

//Displaying test data
const TEST_LIST = [
  {
    id: 0,
    order: 1,
    image: Purse,
    text: "purse",
    purchase: "Bought",
    store: "Amazon",
    quantity: "1"

  },
  {
    id: 1,
    order: 2,
    image: Console,
    text: "Console",
    purchase: "Bought",
    store: "Best Buy",
    quantity: "2"
  },
  {
    id: 2,
    order: 3,
    image: Car,
    text: "Car",
    purchase: "Want",
    store: "Car Dealership",
    quantity: "1"
  }
]


export default function App() {

  const[lists, setLists] = useState<Array<List>>(TEST_LIST)
  const [selectedListId, setSelectedListId] = useState(0)

  //useEffect to change title
  useEffect(() => {
    document.title = `Shopping List (${lists.length})`
    //syncs how many are in the list
    //runs when length changes
  }, [lists.length])

  const selectedList = lists.find(l => l.id === selectedListId)


  const addList = () => {
    const blankList = {
      id: lists.length ? lists[lists.length - 1].id + 1 : 0,
      order: 4,
      image: EmptyCart,
      text: "",
      purchase: "Want",
      store: "None",
      quantity: "0"
    }

    setLists( [ ...lists, blankList ] )

  }

  //Delete items from our list
  const deleteList = (idToDelete: number) => {
    setLists( lists.filter(l => l.id !== idToDelete) )
  
  }

  //Update Purchases from out list
  const updatePurchase= (newPurchase: string, idToUpdate?: number) => {
    //if statement to check
    if(!idToUpdate === undefined) {
      return
    }

    setLists(lists => lists.map(list => (
      list.id !== idToUpdate ? list : {
        ...list,
        [newPurchase]: newPurchase
      }
    )))

  }

  return (
  <div className="d-flex flex-column vh-100 ">
    <Topbar selectedList={selectedList} addList={addList} updatePurchase={updatePurchase}/>
    <div className="d-flex flex-grow-1">
      <ItemCard/>
      <Sidebar 
        lists={lists} 
        deleteList={deleteList} 
        selectedListId={selectedListId} 
        setSelectedListId={setSelectedListId}/>
    </div>
  </div>
  )
}


//other file that plan to use
//topbar
//itemlist
//itemcard