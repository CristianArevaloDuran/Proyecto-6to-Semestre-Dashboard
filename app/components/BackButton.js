'use client';

import { icons } from "@/app/lib/constants"
import Link from "next/link";

export default function BackButton({text, to}) {
    return(
        <Link href={to} className="back-button" >
            <div dangerouslySetInnerHTML={{__html: icons.back}} />
            <p>{text}</p>    
        </Link>
    )
}