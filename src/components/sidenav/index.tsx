import React from 'react';
import style from './style.module.css'
import {Link} from "react-router-dom";
import {ROUTES_NAME} from "../../data";



export const Sidenav = () => {
    return (
        <div className={style.sidenav}>
            <ul>
                {
                    ROUTES_NAME.map(route => (
                        <li key={route}>
                            <Link
                                to={route}
                            >{route}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};