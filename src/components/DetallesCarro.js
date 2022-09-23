import '../styles/detallesCarro.css'

const DetallesCarro = (props) => {
    const { carro } = props
    return (
        <div className='detallesCarro'>
            <ul className='ul'>
                {carro.map(x =>
                    <li className='products' key={x.name}>
                        <img alt={x.name} src={x.img} className='img' />
                        {x.name} <span>{x.cantidad}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default DetallesCarro