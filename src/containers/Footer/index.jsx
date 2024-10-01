import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav container">
                <h2>Publicaciones</h2>
                <figure>
                    <img src="/footer/fakeFooter.png" alt="fakeFooter" />
                </figure>
                <ul className="footer__nav-links">
                    <li>
                        <Link to="#">
                            <Icon className='footer__nav-icon' icon="ic:baseline-whatsapp" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <Icon className='footer__nav-icon' icon="mdi:instagram" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <Icon className='footer__nav-icon' icon="ic:baseline-facebook" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <Icon className='footer__nav-icon' icon="mdi:twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <Icon className='footer__nav-icon' icon="mdi:youtube" />
                        </Link>
                    </li>
                </ul>
                <p>© 2024 by SAMAestudio.com</p>
            </nav>
        </footer>
    );
}

export default Footer;

