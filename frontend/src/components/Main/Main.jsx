import React from 'react';
import SalesCard from '../SalesCard/SalesCard';
import './Main.css'

const Main = () => {
    return ( <main>
        <section id="sales">
            <div className="dsmeta-container">
                <SalesCard />
            </div>
        </section>
    </main> );
}
 
export default Main;

