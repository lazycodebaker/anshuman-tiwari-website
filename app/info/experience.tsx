import Parallax from "@/components/Animation/Parallax"
import { color, font } from "@/constants"
import { montrealMedium } from "../font"

function Card({ key, role, company, desc, speed }: {
    key: string,
    role: string,
    speed: number,
    company: string,
    desc: string
}) {
    return (
        <Parallax key={key} speed={speed}>
            <div className="w-full min-h-full flex lg:flex-row flex-col justify-center lg:items-center items-start">
                <div key={key} className="w-1/2 flex-col gap-2">
                    <h1>{company}</h1>
                    <h2 style={{
                        fontSize: font.size.XS
                    }} className="inline-block">{role}</h2>
                </div>

                <div className="w-full">
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </Parallax>
    )
}

const experienceList = [
    {
        key: '1',
        speed: 1,
        company: 'Baylink',
        role: 'Tech Lead',
        desc: "At Baylink, I utilized my expertise in React and TypeScript to establish a robust technical foundation for the company's web applications. I was involved in designing and developing scalable and efficient front-end solutions that improved user experience and interface responsiveness. Additionally, I applied machine learning techniques to analyze and forecast data trends, providing valuable insights for strategic decision-making."
    },
    {
        key: '2',
        speed: 1,
        company: 'NEC',
        role: 'Software Engineer',
        desc: 'During my tenure at MCLUB, I immersed myself in the world of React, a JavaScript library used for building user interfaces. This experience allowed me to understand how to create dynamic and responsive web applications. Additionally, I focused on developing impactful web designs that not only captured attention but also enhanced user engagement. My role involved strategizing for audience growth, where I learned to leverage digital marketing techniques and analytics to optimize user acquisition and retention strategies. This experience ignited my passion for front-end development and equipped me with valuable skills in UI/UX design and audience engagement strategies.'
    }
]

export default function Experience() {
    return <section style={{
        color: color.WHITE
    }} className="h-full w-full my-24">
        <Parallax id="experience" speed={1} key={"experience"}>
            <section className='py-16'>
                <h1 style={{
                    fontSize: font.size.XL
                }} className={`${montrealMedium.className}`}>Experience</h1>
                <div style={{
                    backgroundColor: color.WHITE
                }} className="w-full h-[1.5px] relative" />
            </section>
        </Parallax>

        <Parallax id="experience" speed={1} key={"experience"} className="min-h-screen">
            {experienceList.map((experience) => <div key={experience.key} className="my-24">
                <Card {...experience} />
            </div>)}
        </Parallax>


    </section>
}