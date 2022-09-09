import logo from '../../logo.svg'
import styles from './style.module.css'

export const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <img src={logo} alt="logo"/>
            </nav>
        </div>
    );
};