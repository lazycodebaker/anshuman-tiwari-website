import Underline from "@/components/Animation/UnderlineText";
import { color, font } from "@/constants";
import Link from "next/link";
import { montrealThin } from "../font";

export default function Contact() {
    return (
        <main style={{
            backgroundColor: color.WHITE
        }} className="h-screen flex flex-col px-4">
            <div className="flex flex-col justify-around h-full">
                <div>
                    <h1 className="text-7xl md:text-9xl mb-4 text-left font-serif">Contact</h1>
                    <Link href="mailto:lazycodebaker@icloud" className="text-4xl md:text-5xl mb-10 text-left">
                        <Underline key={"email"}>
                            lazycodebaker@icloud.com
                        </Underline>
                    </Link>
                </div>
                <div className="flex w-full md:items-center items-start justify-between md:flex-row flex-col">
                    <p className="text-5xl md:text-[5.25rem] text-left">Anshuman Tiwari</p>

                    <ul style={{
                        fontSize: font.size.XXS
                    }} className={`flex items-center font-semibold gap-1 uppercase justify-center ${montrealThin.className}`}>
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
                        </Link>
                        <Link href="">
                            <Underline key={"twitter"}>
                                X (Twitter)
                            </Underline>
                        </Link>
                    </ul>
                </div>
            </div>

            <footer className="w-full mb-3">
                <div style={{
                    borderColor: color.BLACK
                }} className="border-t w-full mb-3"></div>
                <div style={{
                    fontSize: font.size.XS
                }} className="flex justify-center items-center text-gray-500">
                    <p className="text-center">© 2024 Anshuman Tiwari</p>
                </div>
            </footer>
        </main>
    )
}
