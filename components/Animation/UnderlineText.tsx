
'use client'

import { color } from "@/constants"
import { useState } from "react"
import { cubicBezier } from 'framer-motion';

import dynamic from "next/dynamic"
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false })

export default function Underline({ children, isBgDark }: { children: React.ReactNode, isBgDark?: boolean }) {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div
            className='relative inline-block cursor-pointer'
            onMouseMove={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
            <MotionDiv
                initial={{
                    scaleX: 0
                }}
                animate={{
                    scaleX: hovered ? 1 : 0
                }}
                transition={{
                    duration: 0.4,
                    ease: cubicBezier(0.83, 0, 0.17, 1),
                    delay: 0.1
                }}
                style={{
                    backgroundColor: isBgDark ? color.WHITE : color.BLACK,
                    originX: 1
                }}
                className='absolute bottom-0 left-0 w-full h-[1.5px]'
            />
            <MotionDiv
                initial={{
                    scaleX: 0
                }}
                animate={{
                    scaleX: hovered ? 1 : 0
                }}
                transition={{
                    duration: 0.2,
                    ease: cubicBezier(0.83, 0, 0.17, 1),
                }}
                style={{
                    backgroundColor: isBgDark ? color.WHITE : color.BLACK,
                    originX: 0
                }}
                className='absolute bottom-0 left-0 w-full h-[1.5px]'
            />
        </div>
    )
}
