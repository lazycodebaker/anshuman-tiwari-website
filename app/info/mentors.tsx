import Parallax from "@/components/Animation/Parallax"
import { color, font } from "@/constants"
import { montrealMedium } from "../font"

function Card({ _key, role, manager, desc ,company}: {
    _key: string,
    role: string,
    manager: string,
    desc: string,
    company : string
}) {
    return (
        <Parallax key={_key} speed={1}>
            <div className="w-full min-h-full flex lg:flex-row flex-col justify-center lg:items-center items-start">
                <div key={_key} className="w-1/2 flex-col gap-2 lg:my-0 my-2">
                    <h1>{manager}</h1>
                    <h2 style={{
                        fontSize: font.size.XS
                    }} className="inline-block">{role}, {company} </h2>
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

const mentors = [
    {
        _key: '1',
        manager: 'Sakshat Gandhi',
        company : 'Baylink',
        role: 'Founder & CEO',
        desc: "I highly recommend Anshuman Tiwari as an exceptional full stack developer, team player, and tech lead. Anshuman consistently demonstrates a deep understanding of both front-end and back-end development, delivering high-quality solutions that meet and exceed project requirements.As a team player, Anshuman is invaluable. He actively collaborates with team members, providing guidance and support to ensure project success. His strong communication skills foster a positive and productive work environment, allowing for effective teamwork and efficient problem-solving.Anshuman's leadership as a tech lead is exemplary. He leads by example, displaying a strong work ethic, attention to detail, and a proactive approach to addressing challenges. His ability to manage tasks, set priorities, and delegate responsibilities has significantly contributed to our team's success.Overall, I have full confidence in Anshuman Tiwari's abilities and believe he would be a valuable asset to any team or project."
    },
    {
        _key: '2',
        manager: 'Avneet Badhwar',
        company : 'NEC',
        role: 'Data Scientist',
        desc: "I've had the pleasure of working with Anshuman for 1 years, and he's consistently impressed me with his hardworking attitude and enthusiasm for technology. Anshuman's eagerness to learn and stay updated with the latest trends make him a valuable asset to any team. He's adaptable, collaborative, and always delivers high-quality work under pressure. I highly recommend Anshuman for any role where dedication and a passion for technology are valued."
    },
    {
        _key: '3',
        manager: 'Raheel Juberi',
        company : 'NEC',
        role: 'Data Scientist',
        desc: "I worked with Anshuman for almost a year and he had great dedication, enthusiasm, and quick learning abilities. He has eagerness to learn. He has knowledge in vast fields. He would be a valuable addition to any team."
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
            {mentors.map((mentor) => <div key={mentor._key} className="my-24">
                <Card {...mentor} key={mentor._key} />
            </div>)}
        </Parallax>


    </section>
}