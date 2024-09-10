const LinkButton = ({ className, label, href = "#" }) => {

    return (
        <>
            <a href={href} className={`link-button ${className}__link-button`}>{ label }</a>
        </>
    )
}

export default LinkButton