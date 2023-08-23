'use client'
import Link from "next/link"
import Image from "next/image"
import style from './navbar.module.css'
import logo from '../../assets/images/LOGO.svg'
import what from '../../assets/images/Vector.svg'
import React, { useState } from "react"
import { routes } from "@/assets/constants/constants"


export default function Navbar() {
  const [activeLink, setActiveLink] = useState('inicio');

  const activeClick = (route: string) => {
    setActiveLink(route);
  }
  

  return (
    <section className={style.containerNavbar}>
      <Image width={250} height={30} alt="logo" src={logo} />
      <ul className={style.links}>
        {routes.map(({ route, name }) => {
          const classNames = activeLink === name ? style.activeLink : ''
          return (
            <li key={route} className={classNames} >
              <Link onClick={()=>activeClick(name)} className={style.link} href={route}>{name}</Link>
            </li>
          )
        })}
        <button  className={style.button}><Image alt="what" src={what} width={36} height={36}/>Chatear</button>
      </ul>
    </section>
  )
}