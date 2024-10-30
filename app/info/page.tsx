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
                        // backgroundColor: color.BLACK,
                        color: color.WHITE
                    }} className='w-full md:col-span-1 flex items-center justify-start'>
                        <Image src={MY_IMAGE_BW} alt="Anshuman Tiwari" className="w-full h-full" />
                    </div>

                    <div style={{
                        color: color.WHITE,
                        fontSize: font.size.SM
                    }} className={`flex text-white md:col-span-2 items-start justify-center flex-col tracking-wide md:px-8 px-0 uppercase md:my-0 my-4 font-semibold ${montrealThin.className}`}>
                        <p>
                            IN 2019, I ENROLLED IN COLLEGE.
                        </p>
                        <p>
                            I WASN&#39;T ABLE TO SURE WHAT I WANTED TO DO WITH MY LIFE. INITIALLY, I THOUGHT MY PROFESSION WOULD BE RELATED TO THE RAILWAY INDUSTRY. AND BEFORE DELVING INTO THE WORLD OF WEB DEVELOPMENT AND DESIGN, I ALSO WORKED AS A WAITER.  <br /> <br />
                        </p>
                        <p>
                            AS A JUNIOR WEB DEVELOPER I REALIZED THAT I ENJOYED THE CREATIVE ASPECT OF MY WORK MORE, AND I MADE A FULL TRANSITION INTO THE FIELD OF DESIGN. SINCE THEN, I HAVE WORKED AS A FREELANCER ON PLATFORMS LIKE UPWORK AND COLLABORATED WITH COMPANIES AND CLIENTS ON A FULL-TIME OR CONTRACT BASIS. I’VE WORKED WITH PROMINENT COMPANIES AND CLIENTS.
                        </p>
                    </div>

                </section>
            </Parallax>

            <Experience />
            <Mentors />

            <Link style={{
                color: color.WHITE,
            }} href="mailto:lazycodebaker@icloud" className="text-4xl flex items-center gap-4 lg:text-5xl mb-10 text-left">
                <Underline key={"email"} isBgDark={true}>
                    lazycodebaker@icloud.com
                </Underline>

                <MdArrowOutward />
            </Link>
        </main>
    )
}