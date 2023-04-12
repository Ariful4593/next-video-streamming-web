import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
    return (
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/movies'>Movies</Link></li>
            <li><Link href='/tvshows'>TV Shows</Link></li>
            <li><Link href='/videos'>Videos</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/pages'>Pages</Link></li>
        </ul>
    )
}
