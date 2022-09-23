import '../styles/producto.css'
import Button from './Button'

const Producto = (props) => {
    const { producto, agregarAlCarro } = props

    return (
        <div className="producto">
            <img alt={producto.name} src={producto.img} />
            <h3>{producto.name}</h3>
            <p>{producto.price}</p>
            <Button onClick={() => agregarAlCarro(producto)}>
                Agregar al carro
            </Button>
        </div>
    )
}

export default Producto