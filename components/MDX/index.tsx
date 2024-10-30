import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "@/lib/utils"

const components = {
    h1: ({ className, ...props } : React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={cn(
                "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props } : React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn(
                "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
                className
            )}
            {...props}
        />
    ), 
    a: ({ className, ...props } : React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
            className={cn("font-medium underline underline-offset-4", className)}
            {...props}
        />
    ),
    p: ({ className, ...props } : React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props } : React.OlHTMLAttributes<HTMLOListElement>) => (
        <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props } : React.OlHTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props } : React.LiHTMLAttributes<HTMLLIElement>) => (
        <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({ className, ...props } : React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className={cn(
                "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
                className
            )}
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => ( 
        <img className={cn("rounded-md py-4 my-4", className)} alt={alt} {...props} />
    ), 
    code: ({ className, ...props } : React.HTMLAttributes<HTMLPreElement>) => (
        <code
            className={cn(
                "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
                className
            )}
            {...props}
        />
    ),
    Image, 
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code)

    return (
        <div className="mdx">
            <Component components={components} />
        </div>
    )
}