import logo from '../../../public/logo/eckbdLogo.png'
import Menu from '../../components/Menu'
import CartWidget from '../../components/CartWidget'
const Header = () => {

    const links = [
        {
            label: 'Tienda',
            href: '/'
        },
        {
            label: 'Nosotros',
            href: '#'
        },
        {
            label: 'Contacto',
            href: '#'
        }
    ]

    return (
        <>
            <header className="header">
                <nav className="navbar container">
                    <a className='navbar__logo' href="/">
                        <figure className="navbar__img">
                            <img src={logo} alt=""/>
                        </figure>
                    </a>
                    <Menu className="navbar" links={links}>
                        <li>
                            <a href="#" className="navbar__link-button">
                                <CartWidget quantity={0}/>
                            </a>
                        </li>
                    </Menu>
                </nav>
            </header>
        </>
    )
}

export default Header
