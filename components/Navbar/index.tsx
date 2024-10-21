"use client"

import Link from "next/link"
import { montrealThin } from "@/app/font"
import { color, font } from "@/constants"
import FlipText from "../Animation/FlipText"
import Underline from "../Animation/UnderlineText"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navbar() {

    const usePathName = usePathname()
    const route = usePathName.split("/")[1]

    const [isPageDark, setIsPageDark] = useState<boolean>(false)

    useEffect(() => {
        if (route === "info") {
            setIsPageDark(true)
        } else {
            setIsPageDark(false)
        }
    }, [route])

    return <nav style={{
        color: isPageDark ? color.WHITE : color.BLACK,
        fontSize: font.size.XXS,
        backgroundColor: "transparent",
        zIndex: "1000"
    }}
        className={`h-12 flex w-screen fixed top-0 left-0 uppercase font-semibold items-center justify-between px-4 ${montrealThin.className}`}>
        <Link href='/'>
            <FlipText> Anshuman Tiwari</FlipText>
        </Link >
        <ul className="flex items-center gap-1 justify-center">
            <Link href="/info">
                <Underline>
                    info
                </Underline>
                <span> ,</span>
            </Link>
            <Link href="/contact">
                <Underline>
                    contact
                </Underline>
            </Link>
        </ul>
    </nav>
}