import React, {FC} from 'react';
import {MainCardProps} from "../../interfaces";
import styles from './style.module.css'


export const MainCard:FC<MainCardProps> = ({
    children
}) => {
    return (
        <div className={styles.mainCard}>
            main card
            {children}
        </div>
    );
};