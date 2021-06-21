import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
            <nav className="container-fluid navbar navbar-expand-lg">
                <div className='container main-nav'>
                    <Link className="navbar-brand" to="/" style={{color: '#fff'}}>Ernest<span style={{color: 'orange'}}>izic</span><span style={{color: 'orange', fontSize:'30px'}}> .</span></Link>
                    <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </span>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#recent-works">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contactme">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

