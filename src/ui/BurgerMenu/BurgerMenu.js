import React from 'react';
import Styles from './BurgerMenu.module.css';

export const BurgerMenu = ({ activeHandler }) => {

    return (
        <div>
            <input type="checkbox" id={Styles.checkbox} />
            <label htmlFor={Styles.checkbox} className={`${Styles.toggle}`} onClick={() => activeHandler()} >
                <div className={Styles.bars} id={Styles.bar1}></div>
                <div className={Styles.bars} id={Styles.bar2}></div>
                <div className={Styles.bars} id={Styles.bar3}></div>
            </label>
        </div>
    )
}
