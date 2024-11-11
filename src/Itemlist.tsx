


export default function ItemList({ list }: { list: { order: number }}){
    return (
     <div className="flex-grow-1 d-flex flex-column bg-info">
       <span>{ list.order }</span>
        <div> test item </div>
        <div> test item </div>


     </div>
    )
}