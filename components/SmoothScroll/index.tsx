"use client"

import { ReactLenis } from "@studio-freight/react-lenis"

export default function SmoothScrolling({ children }: {
    children: React.ReactNode
}) {
    return (
        <ReactLenis root options={{
            lerp: 0.05,
            duration: 1.2,
            smoothWheel: true,
            easing: (t: number) => 1 - Math.pow(1 - t, 4),
            syncTouch: true,
            syncTouchLerp: 0.07,
            touchInertiaMultiplier: 10,
            touchMultiplier: 1.2,
            autoResize: true,
        }}>
            {children}
        </ReactLenis>
    )
} 