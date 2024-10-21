"use client"

import React from "react"

export default function ClampText({ min, max, children, className }: {
    min: string,
    max: string,
    children: React.ReactNode,
    className?: string
}) {
    const textStyle = {
        fontSize: `clamp(${min}, 2rem + 2.47vw, ${max})`,
        lineHeight: '1.5',
    }

    return <h1 className={`inline-block ${className}`} style={textStyle}> {children}</h1>
}
