import ItemCount from './ItemCount'

const onAdd=(cant)=>{
    console.log(cant)
}  


function ItemListContainer({greeting}) {
    return (
        <div>
            <h2>{greeting}</h2>

        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer
