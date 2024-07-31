/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const MyNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href={"#"}>Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href={"#"}>Home</a>
                        </li>
                        <li className="nav-item-dropdown">
                            <a className="nav-link dropdown-toggle" href={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href={"#"}>Action #1</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href={"#"}>Action #2</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MyNavbar;