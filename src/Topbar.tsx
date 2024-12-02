
//add
//remove
//update

import TopbarButton from "./TopbatButton";
import UpdateButton from "./assets/updateButton.svg";
import AddButton from "./assets/addButton.png";
import QuantityButton from "./assets/quantity.webp";
import { Button, Modal, Stack } from "react-bootstrap";
import { useState } from "react";
import type { List } from "./types";
import QuantityForm from "./quantityForm";


type TopbarProps = {
    addList: () => void
    updatePurchase: (purchase: string, id?: number) => void
    selectedList?: List
}

export default function Topbar({ 
    addList, 
    updatePurchase, 
    selectedList 
}: TopbarProps){
    const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false)
    const [isTopbarOpen, setIsTopbarOpen] = useState(false)

    const handleClose = () => setIsPurchaseModalOpen(false)
    const handleTopbarClose = () => setIsTopbarOpen(false)



    return (
        <>
            <div className="bg-secondary p-3 border-bottom">
                <TopbarButton icon={UpdateButton} onClick={() => setIsPurchaseModalOpen(true)}/>
                <TopbarButton icon={AddButton} onClick={addList}/>
                <TopbarButton icon={QuantityButton} onClick={() => setIsTopbarOpen(true)}/>
            </div>
            <Modal show={isPurchaseModalOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Purchase Made?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack direction="horizontal" gap={1}>
                        <Button 
                        variant={selectedList?.purchase === "Purchased" ? "success" : "outline-success"}
                        onClick={() => updatePurchase( "Purchased", selectedList?.id)}> 
                        Purchased </Button>
                        <Button 
                        variant={selectedList?.purchase === "Want" ? "danger" : "outline-danger"}
                        onClick={() => updatePurchase("Want", selectedList?.id,)}> 
                        Want </Button>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleTopbarClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={isTopbarOpen} onHide={() => setIsTopbarOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Purchased Item & Quantity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <QuantityForm 
                        updatePurchase={updatePurchase} 
                        selectedList={selectedList}
                        handleClose={handleTopbarClose}
                    />
                </Modal.Body>
            </Modal>
        </>
   );
 }
 


