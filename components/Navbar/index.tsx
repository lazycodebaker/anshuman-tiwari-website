"use client"

import Link from "next/link"
import { montrealThin } from "@/app/font"
import { color, font } from "@/constants"
import FlipText from "../Animation/FlipText"
import Underline from "../Animation/UnderlineText"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

export default function Navbar() {

    const usePathName = usePathname()
    const route = usePathName.split("/")[1]

    const [isPageDark, setIsPageDark] = useState<boolean>(false)

    const darkPages = useMemo(() => ["info", "work"], [])

    console.log(route);

    useEffect(() => {
        if (darkPages.find(page => page === route)){
            setIsPageDark(true)
        } else {
            setIsPageDark(false)
        }
    }, [route,darkPages])

    return <nav style={{
        color: isPageDark ? color.WHITE : color.BLACK,
        fontSize: font.size.XXS,
        backgroundColor: "transparent",
        zIndex: 100
    }}
        className={`h-12 flex w-screen fixed top-0 left-0 uppercase font-semibold items-center justify-between px-4 ${montrealThin.className}`}>
        <Link href='/'>
            <FlipText> Anshuman Tiwari</FlipText>
        </Link >
        <ul className="flex items-center gap-1 justify-center">
            <Link href="/info">
                <Underline isBgDark={isPageDark}>
                    info
                </Underline>
                <span> ,</span>
            </Link>
            <Link href="/contact">
                <Underline isBgDark={isPageDark}>
                    contact
                </Underline>
            </Link>
        </ul>
    </nav>
}