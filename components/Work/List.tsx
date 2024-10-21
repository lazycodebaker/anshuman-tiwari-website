
"use client"

import { useRouter } from "next/navigation"
import { cubicBezier, motion } from "framer-motion"
import { useState } from "react"
import { color, font } from "@/constants"
import { MdArrowOutward } from "react-icons/md"

export default function WorkList({ work, index }: {
    work: { date: string, title: string, desc: string },
    index: number,
}) {
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const navigate = useRouter()

    return (
        <motion.li
            key={index}
            onClick={() => navigate.push(`/work/${index}`)}
            style={{
                borderColor: color.BLACK,
                backgroundColor: isHovered ? 'white' : 'transparent',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            transition={{
                duration: 5,
                ease: cubicBezier(0.17, 0, 0.17, 1),
            }}
            className="flex justify-start p-2 items-center cursor-pointer w-full h-full border-b bottom-1"
        >
            <div className="flex items-center h-full w-full gap-4">
                <h2
                    style={{
                        fontSize: font.size.XS,
                    }}
                    className="tracking-widest text-gray-600"
                >
                    {work.date}
                </h2>
                <p
                    style={{
                        color: color.BLACK,
                        fontSize: font.size.MD,
                    }}
                >
                    {work.title}
                </p>
            </div>
            <MdArrowOutward className={`${isHovered ? 'block' : 'hidden'}`} />
        </motion.li>
    )
}
