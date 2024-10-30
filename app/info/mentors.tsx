import Parallax from "@/components/Animation/Parallax"
import { color, font } from "@/constants"
import { montrealMedium } from "../font"

function Card({ key, role, manager, desc ,company}: {
    key: string,
    role: string,
    manager: string,
    desc: string,
    company : string
}) {
    return (
        <Parallax key={key} speed={1}>
            <div className="w-full min-h-full flex lg:flex-row flex-col justify-center lg:items-center items-start">
                <div key={key} className="w-1/2 flex-col gap-2 lg:my-0 my-2">
                    <h1>{manager}</h1>
                    <h2 style={{
                        fontSize: font.size.XS
                    }} className="inline-block">{role}, {company} </h2>
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

const mentors = [
    {
        key: '1',
        manager: 'Sakshat Gandhi',
        company : 'Baylink',
        role: 'Founder & CEO',
        desc: ' During my tenure at MCLUB, I immersed myself in the world of React, a JavaScript library used for building user interfaces. This experience allowed me to understand how to create dynamic and responsive web applications. Additionally, I focused on developing impactful web designs that not only captured attention but also enhanced user engagement. My role involved strategizing for audience growth, where I learned to leverage digital marketing techniques and analytics to optimize user acquisition and retention strategies. This experience ignited my passion for front-end development and equipped me with valuable skills in UI/UX design and audience engagement strategies.'
    },
    {
        key: '2',
        manager: 'Avneet Badhwar',
        company : 'NEC',
        role: 'Data Scientist',
        desc: "At Baylink, I utilized my expertise in React and TypeScript to establish a robust technical foundation for the company's web applications. I was involved in designing and developing scalable and efficient front-end solutions that improved user experience and interface responsiveness. Additionally, I applied machine learning techniques to analyze and forecast data trends, providing valuable insights for strategic decision-making."
    },
    {
        key: '3',
        manager: 'Raheel Juberi',
        company : 'NEC',
        role: 'Data Scientist',
        desc: "At Baylink, I utilized my expertise in React and TypeScript to establish a robust technical foundation for the company's web applications. I was involved in designing and developing scalable and efficient front-end solutions that improved user experience and interface responsiveness. Additionally, I applied machine learning techniques to analyze and forecast data trends, providing valuable insights for strategic decision-making."
    }
]

export default function Mentors() {
    return <section style={{
        color: color.WHITE
    }} className="h-full w-full my-24">
        <Parallax id="experience" speed={1} key={"experience"}>
            <section className='py-16'>
                <h1 style={{
                    fontSize: font.size.XL
                }} className={`${montrealMedium.className}`}>Words From My Mentors</h1>
                <div style={{
                    backgroundColor: color.WHITE
                }} className="w-full h-[1.5px] relative" />
            </section>
        </Parallax>

        <Parallax id="experience" speed={1} key={"experience"} className="min-h-screen">
            {mentors.map((mentor) => <div key={mentor.key} className="my-24">
                <Card {...mentor} />
            </div>)}
        </Parallax>


    </section>
}