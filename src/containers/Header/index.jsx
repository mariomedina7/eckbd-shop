import logo from '../../../public/logo/eckbdLogo.png'
import Menu from '../../components/Menu'
import CartWidget from '../../components/CartWidget'
import { Link } from 'react-router-dom'
const Header = () => {

    const links = [
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
        },
        {
            label: 'Tienda',
            href: '/'
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
                        <Link to="#" className="navbar__link-button">
                            <CartWidget quantity={0}/>
                        </Link>
                    </li>
                </nav>
            </header>
        </>
    )
}

export default Header
