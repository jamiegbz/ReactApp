
//A shopping app that allows you to add/remove/update items in your cart


import ItemCard from "./Sidebar";
import Sidebar from "./Itemlist"
import Topbar from "./Topbar";

const testList = [
  {
    id: 0,
    order: 1
  },
  {
    id: 1,
    order: 2,
  }
]


export default function App() {
  return (
  <div className="d-flex flex-column vh-100 ">
    <Topbar/>
    <div className="d-flex flex-grow-1">
      <ItemCard/>
      <Sidebar list={testList[0]}/>
    </div>
  </div>
  )
}


//other file that plan to use
//topbar
//itemlist
//itemcard