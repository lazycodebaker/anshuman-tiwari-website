import ClampText from "@/components/Animation/ClampText"
import Parallax from "@/components/Animation/Parallax"
import { aboutMe, color, font } from "@/constants"
import { montrealMedium, montrealThin } from "../font"
import Image from "next/image"
import MY_IMAGE_BW from "@/assets/my_image_bw.png"
import Experience from "./experience"
import Mentors from "./mentors"
import Link from "next/link"
import Underline from "@/components/Animation/UnderlineText"
import { MdArrowOutward } from "react-icons/md"

export default function Info() {
    return (
        <main style={{
            backgroundColor: color.BLACK
        }} className="w-full h-full px-4">

            <Parallax id="info" speed={1} key={"info"}>
                <section className='py-16'>
                    <div style={{
                        backgroundColor: color.BLACK,
                        color: color.WHITE,
                        lineHeight: "1.5"
                    }}
                    >
                        <ClampText key="info-heading" min={"2.12rem"} max={"3rem"} className={montrealMedium.className}>
                            {aboutMe}
                        </ClampText>
                    </div>
                </section>
            </Parallax>

            <Parallax id="info-text" speed={1} key={"info-text"}>

                <section className='flex lg:flex-row flex-col gap-4'>
                    <div style={{ 
                        color: color.WHITE
                    }} className='w-full md:col-span-1 flex items-center justify-start'>
                        <Image src={MY_IMAGE_BW} alt="Anshuman Tiwari" className="w-full h-full" />
                    </div>

                    <div style={{
                        color: color.WHITE,
                        fontSize: font.size.SM
                    }} className={`flex text-white md:col-span-2 tracking-wider items-start justify-center flex-col md:px-8 px-0 uppercase md:my-0 my-4 font-semibold ${montrealThin.className}`}>
                        <>
                            From an early age, I was fascinated by technology, though I wasn&apos;t sure where it would lead me.
                            <div className="my-[1px]" />
                            My curiosity deepened in school as I learned about computers—how they worked, played games, and even operated independently.
                            <div className="my-[1px]" />
                            This spark grew when I discovered robotics and AI. To build on this passion, I pursued a Bachelor&apos; degree, which gave me practical insights and hands-on experience.
                            <div className="my-[1px]" />
                            Working with two amazing companies broadened my skills and perspective, helping me realize the impact technology can have.
                            Now, as I dive deeper into AI, particularly its applications in neuroscience and human-computer interfaces.
                            <div className="my-2" />
                            I have a clear vision of my path. I know what I want to achieve and am excited to pursue it with purpose.
                        </>
                    </div>

                </section>
            </Parallax>

            <Experience />
            <Mentors />

            <Link style={{
                color: color.WHITE,
            }} href="mailto:anshuman.tiwari.de@gmail.com" className="text-3xl flex items-center gap-4 lg:text-4xl mb-4 text-left">
                <Underline key={"email"} isBgDark={true}>
                    anshuman.tiwari.de@gmail.com
                </Underline>

                <MdArrowOutward />
            </Link>
        </main>
    )
}