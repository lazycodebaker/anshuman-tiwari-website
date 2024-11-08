import Parallax from "@/components/Animation/Parallax"
import { color, font } from "@/constants"
import { montrealMedium } from "../font"

function Card({ _key, role, company, desc, speed }: {
    _key: string,
    role: string,
    speed: number,
    company: string,
    desc: string
}) {
    return (
        <Parallax key={_key} speed={speed}>
            <div className="w-full min-h-full flex lg:flex-row flex-col justify-center lg:items-center items-start">
                <div key={_key} className="w-1/2 flex-col gap-2">
                    <h1>{company}</h1>
                    <h2 style={{
                        fontSize: font.size.XS
                    }} className="inline-block">{role}</h2>
                </div>

                <div className="w-full tracking-wider">
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
        _key: '1',
        speed: 1,
        company: 'Baylink',
        role: 'Tech Lead',
        desc: "At Baylink, I used my skills in React and TypeScript to create a solid technical base for our product applications. I focused on building scalable, efficient solutions that made our products easier and better for users. I’m lucky to work with a fantastic team where everyone supports each other. The work-life balance and great leadership make it an enjoyable place to work, helping me grow and contribute in meaningful ways."
    },
    {
        _key: '2',
        speed: 1,
        company: 'NEC',
        role: 'Software Engineer',
        desc: "At NEC, I joined as an intern and had the opportunity to work with a talented team of ML experts, data scientists, and computer vision specialists. The environment was welcoming, with friendly people who made me feel comfortable and supported. It quickly started to feel like home, as everyone encouraged collaboration and learning, making it a truly rewarding experience."
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
            {experienceList.map((experience) => <div key={experience._key} className="my-24">
                <Card {...experience} key={experience._key} />
            </div>)}
        </Parallax>


    </section>
}