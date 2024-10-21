"use client"

import { CSSProperties, useEffect, useRef } from "react"
import { useWindowSize } from "@studio-freight/hamo"

type WindowSize = {
    width: number
}

export default function Parallax({ className, children, speed = 1, id = "parallax" , style }: {
    className?: string
    children: React.ReactNode
    speed?: number
    id?: string,
    style? : CSSProperties
}) {
    const trigger = useRef<HTMLDivElement>(null)
    const target = useRef<HTMLDivElement>(null)
    const timeline = useRef<GSAPTimeline | null>(null)
    const windowSize = useWindowSize() as WindowSize
    const { width: windowWidth } = windowSize

    useEffect(() => {
        const loadGSAP = async () => {
            const { gsap } = await import('gsap')
            const { ScrollTrigger } = await import('gsap/ScrollTrigger')

            gsap.registerPlugin(ScrollTrigger)
            const y = windowWidth * speed * 0.1

            const setY = gsap.quickSetter(target.current, "y", "px")

            timeline.current = gsap.timeline({
                scrollTrigger: {
                    id: id,
                    trigger: trigger.current,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom top",
                    onUpdate: (e) => {
                        setY(e.progress * y)
                    },
                },
            })
        }

        loadGSAP()

        return () => {
            timeline?.current?.kill()
        }
    }, [id, speed, windowWidth])

    return (
        <div style={style} ref={trigger} className={className}>
            <div  ref={target}>{children}</div>
        </div>
    )
}