import { Doc } from "@/.contentlayer/generated"
import { montrealBook, montrealMedium } from "@/app/font"
import ClampText from "@/components/Animation/ClampText"
import Parallax from "@/components/Animation/Parallax"
import Underline from "@/components/Animation/UnderlineText"
import { Mdx } from "@/components/MDX"
import { color, font } from "@/constants"
import { getDocFromParams } from "@/lib/docs"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { HiArrowLongLeft } from "react-icons/hi2"


export default async function Work({ params }: { params: { slug: string } }) {
    const doc: Doc = await getDocFromParams(params.slug)

    return (
        <>
            <Link href="/" style={{
                color: color.WHITE,
                fontSize: font.size.XS,
                zIndex: 1000
            }} className="fixed left-4 top-12 flex items-center gap-2">
                <HiArrowLongLeft className="text-2xl" />
                <Underline isBgDark={true}>
                    BACK
                </Underline>
            </Link>
            <Parallax style={{
                backgroundColor: color.BLACK,
                color: color.WHITE
            }} className="min-h-screen h-full p-4">
                <div className="max-w-3xl mx-auto">

                    <div className={`flex items-center justify-center pb-36 h-screen flex-col text-center ${montrealMedium.className}`}>
                        <div className="flex flex-col gap-2">
                            <ClampText key="title" min={"2.12rem"} max={"4rem"}>
                                {doc.title}
                            </ClampText>
                            <ClampText key="description" min={"0.8rem"} max={"1rem"} className="text-gray-400">
                                {doc.description}
                            </ClampText>
                            <p className={`text-sm text-gray-500 ${montrealBook.className}`}>{new Date(doc.publishedOn).toUTCString().slice(0, 16)}</p>

                        </div>

                        <Link
                            href="https://github.com/lazycodebaker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 hover:text-gray-300 transition"
                        >
                            <FaGithub size={32} />
                        </Link>

                        <div className="mt-36">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="40"
                                viewBox="0 0 24 40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mx-auto animate-bounce"
                            >
                                <line x1="12" y1="5" x2="12" y2="30"></line>
                                <polyline points="19 25 12 30 5 25"></polyline>
                            </svg>
                        </div>

                    </div>

                    <hr className="my-8 border-gray-600" />

                    <div className={`max-w-3xl h-full ${montrealMedium.className}`}>
                        <Mdx code={doc.body.code} />
                    </div>
                </div>
            </Parallax>
            <div style={{
                backgroundColor: color.BLACK,
                color: color.WHITE,
                fontSize: font.size.XS,
            }} className="py-12 h-96 w-full flex items-end uppercase justify-center">
                <Link href="/" className="transition">
                    <Underline isBgDark={true}>
                        Back to Home To Read More
                    </Underline>
                </Link>
            </div>
        </>
    )
}
