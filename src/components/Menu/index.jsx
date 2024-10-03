import { NavLink } from "react-router-dom";

const Menu = ({links, className, children}) => {
    return (
        <menu className={`menu ${className}__menu`}>
            {links.map((link, index) =>
            <li key={`navlink-${index}`} className={`menu__item ${className}__item`}>
                <NavLink to={link.href} className={`menu__link ${className}__link`}>{link.label}</NavLink>
            </li>)}        
            {children}
        </menu>
    )
}   

export default Menu