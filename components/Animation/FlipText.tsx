
'use client'

import dynamic from 'next/dynamic'
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false })
const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false })

const DURATION = 0.25
const STAGGER = 0.025

export default function FlipText({ children }: {
    children: string
}) {
    return (
        <MotionDiv
            initial="initial"
            whileHover="hovered"
            className="relative tracking-wide block overflow-hidden whitespace-nowrap"
            style={{
                lineHeight: 0.85,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <MotionH2
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </MotionH2>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <MotionH2
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </MotionH2>
                ))}
            </div>
        </MotionDiv>
    )
}
