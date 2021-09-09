import { useState }  from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    function sumar (){
        setCount(count + 1 )
        
    }
    function restar(){
        setCount(count -  1)

    }

    return (
        <div>
            Productos   
            <label>{count}</label>
            <button onClick={restar}>-</button>
            <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
            <button onClick={sumar}>+ </button>
            
            
        </div>
    )
}
export default ItemCount