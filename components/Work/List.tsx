
"use client"
 
import { cubicBezier, motion } from "framer-motion"
import { useState } from "react"
import { color, font } from "@/constants"
import { MdArrowOutward } from "react-icons/md"

export default function WorkList({ work, index }: {
    work: { title: string, url: string, index: number },
    index: number,
}) {
    const [isHovered, setIsHovered] = useState<boolean>(false)
//

    return (
        <motion.li
            key={index}
            onClick={() => window.open(work?.url, '_blank')}
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
                <p
                    style={{
                        color: color.BLACK,
                        fontSize: font.size.MD,
                    }}
                >
                    {work.index}.
                </p>
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