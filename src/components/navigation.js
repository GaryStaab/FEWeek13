import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className = 'container bg-info'>
                <nav class="navbar navbar-expand-sm">
                    <a class="navbar-brand" href="index.html">Login Page</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-expanded="false" aria-label="toggle-navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="home.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="home.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="home.html">Contact</a>
                            </li>
                        </ul>
                    </div>            
                </nav>
            </div>
        );
    }
}