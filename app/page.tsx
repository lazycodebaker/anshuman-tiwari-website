
"use client"

import { useState } from "react"
import { montrealMedium } from "./font"
import { color, font } from "@/constants"
import { cubicBezier, motion } from "framer-motion"
import { MdArrowOutward } from "react-icons/md"
import Parallax from "@/components/Animation/Parallax"
import { useRouter } from "next/navigation"

const works = [
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'Mens op houten stoel', desc: 'Tilt' },
  { date: "2024.10.13", title: 'Niets is wat het lijkt', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Schubben', desc: 'De Gids' },
  { date: "2024.10.13", title: 'Tunnels graven', desc: 'Papieren Helden' },
  { date: "2024.10.13", title: 'City Lights', desc: 'Extra Extra magazine' },
  { date: "2024.10.13", title: 'Zwemmer', desc: 'Papieren Helden' },
]

function WorkList({ work, index }: {
  work: { date: string, title: string, desc: string },
  index: number,
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const navigate = useRouter()

  return (
    <motion.li
      key={index}
      onClick={() => navigate.push(`/work/${index}`)}
      style={{
        borderColor: color.BLACK,
        backgroundColor: isHovered ? 'white' : 'transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{
        duration: 5,
        ease: cubicBezier(0.17, 0, 0.17, 1),
      }}
      className="flex justify-start p-2 items-center cursor-pointer w-full h-full border-b bottom-1"
    >
      <div className="flex items-center h-full w-full gap-4">
        <h2
          style={{
            fontSize: font.size.XS,
          }}
          className="tracking-widest text-gray-600"
        >
          {work.date}
        </h2>
        <p
          style={{
            color: color.BLACK,
            fontSize: font.size.MD,
          }}
        >
          {work.title}
        </p>
      </div>
      <MdArrowOutward className={`${isHovered ? 'block' : 'hidden'}`} />
    </motion.li>
  )
}


export default function Home() {
  return (
    <main style={{
      backgroundColor: color.WHITE
    }} className="h-full w-full px-4">
      <Parallax id="info" speed={1} key={"info"}>
        <section className='py-16'>
          <h1 style={{
            color: color.BLACK,
            fontSize: font.size.XL
          }} className={`uppercase ${montrealMedium.className}`}>Works</h1>
          <div style={{
            backgroundColor: color.BLACK
          }} className="w-full h-[1.5px] relative" />
        </section>
      </Parallax>

      <Parallax id="info" speed={4} key={"info"} className="min-h-screen">
        <div className="flex justify-center items-center w-full">
          <div className="w-full">
            <ul className="w-full">
              {works.map((work, index) => (
                <WorkList key={index} work={work} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </Parallax>

    </main>
  )
}
