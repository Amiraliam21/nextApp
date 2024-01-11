'use client';

import React from 'react'
import Link from '@/node_modules/next/link'
import { FaBug } from "react-icons/fa";
import { usePathname } from '@/node_modules/next/navigation';
import classNames from '@/node_modules/classnames/index';

const NavBar = () => {

    const currentPath = usePathname();
    console.log(currentPath)

    const Links =[
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
    <Link href='/'><FaBug /></Link>
    <ul className='flex space-x-6'>
        {Links.map(link=> <Link key={link.href} className={`${link.href=== currentPath? 'text-zinc-900' : 'text-zinc=500'} text-zinc-500 hover:text-zinc-800 transation-colors`} href={link.href}>{link.label}</Link>)}
    </ul>
    </nav>
  )
}

export default NavBar