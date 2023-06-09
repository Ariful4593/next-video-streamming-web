import Link from 'next/link'
import React from 'react'

export const BreadCrumb = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item text-white font-weight-bold"><Link href="#" >Home</Link></li>
                <li className="breadcrumb-item text-white font-weight-bold"><Link href="#" >Library</Link></li>
                <li className="breadcrumb-item active text-white font-weight-bold" aria-current="page">Data</li>
            </ol>
        </nav>
    )
}
