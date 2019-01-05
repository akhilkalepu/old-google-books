import React from 'react';

function Nav() {
    return (
        <div >
            <ul className="nav">
                <li className="nav-item mx-auto">
                    <h3 className="page-title">Google Books React Search</h3>
                </li>
                <li className="nav-item mx-auto">
                    <a className="nav-link" href="/search">Search for books and save them for later!</a>
                </li>
                <li className="nav-item mx-auto">
                    <a className="nav-link" href="/saved">View your books</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav