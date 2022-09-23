import { useState } from 'react'
import { products } from './data/products'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Title from './components/Title'
import Productos from './components/Productos'

const App = () => {
  const [productos, setProductos] = useState(products)
  const [carro, setCarro] = useState([])
  const [carroVisible, setCarroVisible] = useState(false)

  const mostrarCarro = () => {
    if(!carro.length) {
      return
    }
    setCarroVisible(!carroVisible)
  }

  const agregarAlCarro = (producto) => {
    console.log(carro)
    if(carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ?({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
        return setCarro(newCarro)
    }
    return setCarro(carro.concat({
      ...producto,
      cantidad: 1
    }))
  }

  return (
    <div>
      <Navbar
        carro={carro}
        carroVisible={carroVisible}
        mostrarCarro={mostrarCarro}
      />
      <Layout>
        <Title />
        <Productos
          agregarAlCarro = {agregarAlCarro}
          productos = {productos}
        />
      </Layout>
    </div>
  )
}

export default App