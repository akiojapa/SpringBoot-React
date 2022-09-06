import React from 'react';
import logo from '../../assets/img/logo.svg'
import './Header.css'

const Header = () => {
    return ( 
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://akiojapa.github.io/portfolio-akio/">Akio Matera</a>
                </p>
            </div>
        </header>
     );
}
 
export default Header;