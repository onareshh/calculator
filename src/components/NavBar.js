import React from 'react'
import { Link } from 'react-router-dom'
import { departments_data } from '../data'

function NavBar() {
    const departments = departments_data;

    return (
        <nav
            className="navbar fixed-top navbar-expand-lg navbar-light bg-almond"
            style={{
                border: '0.25rem solid #008000', /* Green border */
                color: 'white', /* White text color */
            }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: 'white' }}>
                    GPA Calc 2019 <i className="bi-book-half"></i>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>
                            Home <i className="bi-house-door"></i>
                        </Link>
                        <div className="nav-item dropdown">
                            <a
                                className="nav-link active dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ color: 'white' }}
                            >
                                Departments <i className="bi-card-list"></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {departments.map((dept) => (
                                    <li key={dept.id}>
                                        <Link className="dropdown-item" to={"/" + dept.id} style={{ color: 'white' }}>
                                            <p>{dept.name}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
