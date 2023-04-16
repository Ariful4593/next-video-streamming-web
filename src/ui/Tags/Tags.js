import React from 'react';
import Styles from './Tags.module.css';
import Link from 'next/link';

export const Tags = () => {
    return (
        <div className={Styles.tags_body}>
            <ul>
                <li className={Styles.primary_li}>
                    Tags:
                </li>
                <li>
                    <Link href={'/'}>Adventure,</Link>
                </li>
                <li>
                    <Link href={'/'}>Commedy,</Link>
                </li>
                <li>
                    <Link href={'/'}>Thriller</Link>
                </li>
            </ul>
        </div>
    )
}
