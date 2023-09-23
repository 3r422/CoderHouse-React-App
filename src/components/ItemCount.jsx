import Button from "react-bootstrap/Button"
const ItemCount = ({ count, handleDecreaseCount, handleIncreaseCount, handleAgregar }) => {

    return (
        <>
            <div className='item-count'>
                <Button onClick={handleDecreaseCount}>-</Button>
                <span>{count}</span>
                <Button onClick={handleIncreaseCount}>+</Button>
            </div>
            <Button className='agregar-al-carrito' onClick={handleAgregar}>Agregar al Carrito</Button>
        </>
    )
}

export default ItemCount

