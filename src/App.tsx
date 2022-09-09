import React from 'react';
import {Footer, MainCard, Navbar, Sidenav} from "./components";
import styles from './App.module.css'
import {RouterController} from "./routes/RouterController";

function App() {
    return (
        <>
            <div className={styles.contNavigation}>
                <Sidenav/>
                <div className={styles.mainContent}>
                    <Navbar/>
                    <MainCard>
                        <RouterController />
                    </MainCard>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default App;
