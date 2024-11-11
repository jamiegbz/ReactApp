
//add
//remove
//update

import TopbarButton from "./TopbatButton";
import RemoveButton from "./assets/delete-button.svg";
import UpdateButton from "./assets/updateButton.svg";
import AddButton from "./assets/addButton.png";

export default function Topbar(){
    return (
        <div className="bg-secondary p-3 border-bottom">
            <TopbarButton icon={UpdateButton} onClick={() => alert("update button")}/>
            <TopbarButton icon={AddButton} onClick={() => alert("add button")}/>
            <TopbarButton icon={RemoveButton} onClick={() => alert('remove button')}/>
        </div>
    )
}

