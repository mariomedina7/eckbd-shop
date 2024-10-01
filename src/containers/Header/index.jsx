import logo from '/logo/eckbdLogo.png'
import Menu from '../../components/Menu'
import CartWidget from '../../components/CartWidget'
import { Link } from 'react-router-dom'
const Header = () => {

    const links = [
        {
            label: 'Tienda',
            href: '/'
        },
        {
            label: 'Mesas',
            href: '/category/mesas'
        },
        {
            label: 'Organizadores',
            href: '/category/organizadores'
        },
        {
            label: 'Escritorios',
            href: '/category/escritorios'
        }
    ]

    return (
        <>
            <header className="header">
                <nav className="navbar container">
                    <Link className='navbar__logo' to="/">
                        <figure className="navbar__img">
                            <img src={logo} alt=""/>
                        </figure>
                    </Link>
                    <Menu className="navbar" links={links} />
                    <li className="navbar">
                        <Link to="/cart" className="navbar__link-button">
                            <CartWidget quantity={0}/>
                        </Link>
                    </li>
                </nav>
            </header>
        </>
    )
}

export default Header
