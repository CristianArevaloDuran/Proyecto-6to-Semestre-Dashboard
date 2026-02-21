'use client';
import { tabs } from "../lib/constants"
import Link from "next/link"
import Cookies from "js-cookie"

export default function Nav() {
    
    
    const logout = () => {
        localStorage.removeItem('token')
        Cookies.remove('session', {path: '/'});

        window.location = '/login';
    }

    return (
        <nav id="nav">
            <ul>
                {
                    tabs.map((tab)=>(
                        <li key={tab.url}>
                            <Link href={tab.url}>{tab.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <button id="logout" onClick={logout}>
                Cerrar sesion
            </button>
        </nav>
    )
}