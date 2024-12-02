import { ChangeEvent, MouseEvent, useState } from "react"
import type { List } from "./types"

type Props = {
    updatePurchase: (purchase: string, id?: number) => void
    selectedList?: List
    handleClose: () => void

}

export default function QuantityForm({updatePurchase, selectedList, handleClose}: Props) {
    const [formValues, setFormValues] = useState({
        Store: "None",
        QuantityItem: "1"
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        updatePurchase("Store", formValues.Store, selectedList?.id )

        handleClose()
    }
    return(
        <form>
            <div className="mb-2">
                <label htmlFor="store" className="form-label">Store</label>
                <select id="store" className="form-select"
                    name="Store"
                    onChange={handleChange}
                    value={formValues.Store}
                >
                    <option value="None"> None</option>
                    <option value="Amazon" > Amazon</option>
                    <option value="Car Dealership" > Car Dealership</option>
                    <option value="Best Buy" > Best Buy </option>
                    <option value="Target" > Target </option>
                    <option value="H&M" > H&M </option>
                    <option value="Nike" > Nike </option>
                </select>
            </div>
            <div className="mb-2">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input id="quantity" type="number" className="form-control"
                    name="QuantityItem"
                    onChange={handleChange}
                    value={formValues.QuantityItem}
                />
            </div>
            <div className="text-end">
                <button type="button" className="btn btn-secondary me-2" onClick={handleClose}>Cancel</button>
                <button className="btn btn-success" onClick={handleSubmit}>Save</button>
            </div>
        </form>
    )
}