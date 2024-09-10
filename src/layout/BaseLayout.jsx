import Header from "../containers/Header"
const BaseLayout = ({ children }) => {

    return (
        <>
            <Header />
                {children}
        </>
    )
}

export default BaseLayout