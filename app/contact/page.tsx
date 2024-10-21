import Underline from "@/components/Animation/UnderlineText";
import { color, font } from "@/constants";
import Link from "next/link";
import { montrealThin } from "../font";

import MY_IMAGE_BW from "@/assets/my_image_bw.png"
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default function Contact() {
    return (
        <main style={{
            backgroundColor: color.WHITE
        }} className="h-screen w-full grid grid-cols-1 lg:grid-cols-2 px-4">

            <div className="flex flex-col justify-around h-full">
                <div>
                    <h1 className="text-6xl lg:text-8xl mb-4 text-left font-serif">Contact Me</h1>
                    <Link href="mailto:lazycodebaker@icloud" className="text-3xl flex items-center gap-4 lg:text-4xl mb-10 text-left">
                        <Underline key={"email"}>
                            lazycodebaker@icloud.com
                        </Underline>

                        <MdArrowOutward style={{
                            color: color.BLACK
                        }} />
                    </Link>
                </div>
                <div className="flex w-full gap-8 items-start justify-start flex-col">
                    <p className="text-4xl md:text-[4.75rem] text-left font-serif">Anshuman Tiwari</p>

                    <ul style={{
                        fontSize: font.size.XS
                    }} className={`flex items-center font-semibold gap-1 uppercase ${montrealThin.className}`}>
                        <Link href="">
                            <Underline key={"github"}>
                                Github
                            </Underline>
                            <span> ,</span>
                        </Link>
                        <Link href="">
                            <Underline key={"linkedin"}>
                                Linkedin
                            </Underline>
                            <span> ,</span>
                        </Link>
                        <Link href="">
                            <Underline key={"twitter"}>
                                X (Twitter)
                            </Underline>
                        </Link>
                    </ul>
                </div>
            </div>

            <div className="lg:flex hidden items-center justify-center">
                <Image src={MY_IMAGE_BW} alt="Anshuman Tiwari Photo" />
            </div>
        </main>
    )
}
