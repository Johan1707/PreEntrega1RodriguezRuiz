import '../styles/navbar.css'
import Logo from './Logo'
import Carro from './Carro'

const Navbar = (props) => {
    const { carro, carroVisible, mostrarCarro } = props
    return (
        <nav className="navbar">
            <Logo />
            <Carro 
                carro={carro}
                carroVisible={carroVisible}
                mostrarCarro={mostrarCarro}
            />
        </nav>
    )
}

export default Navbar