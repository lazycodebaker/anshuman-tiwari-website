import ClampText from "@/components/Animation/ClampText"
import Parallax from "@/components/Animation/Parallax"
import { color } from "@/constants"
import { montrealMedium } from "../font"

const text = "Hi, Im m Anshuman Tiwari. A student in the field of Machine Learning and Artificial Intelligence, with additional skills as a TypeScript developer. Over the past two years, I have had the privilege of collaborating closely with exceptional individuals and teams, gaining valuable experience and insights. My passion lies in continuous learning and exploring diverse fields to broaden my knowledge and skills."

export default function Info() {
    return (
        <main style={{
            backgroundColor: color.BLACK
        }} className="h-full w-full px-4">

            <Parallax id="info" speed={1} key={"info"}>
                <section className='min-h-screen py-16'>
                    <div style={{
                        backgroundColor: color.BLACK,
                        color: color.WHITE,
                        lineHeight: "1.5"
                    }}
                    >
                        <ClampText key="info-heading" min={"2.12rem"} max={"3rem"} className={montrealMedium.className}>
                            {text}
                        </ClampText>
                    </div>
                </section>
            </Parallax>

        </main>
    )
}