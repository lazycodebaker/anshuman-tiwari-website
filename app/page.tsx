
"use client"

import { montrealMedium } from "./font"
import { color, font } from "@/constants"
import Parallax from "@/components/Animation/Parallax"
import WorkList from "@/components/Work/List"
import FlipText from "@/components/Animation/FlipText"

const works = [
  { date: "2024.11.29", title: 'sfsssf', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum reiciendis voluptas fugiat possimus dignissimos veniam dolore! Ex sunt, id ut beatae quaerat fugit distinctio autem! Ratione fugit iste minima." },
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
          }} className={`uppercase ${montrealMedium.className}`}>
            <FlipText>WORKS</FlipText>
          </h1>
          <div style={{
            backgroundColor: color.BLACK
          }} className="w-full mt-2 h-[1.5px] relative" />
        </section>
      </Parallax>

      <Parallax style={{
        backgroundColor: color.WHITE
      }} id="info" speed={4} key={"info"} className="min-h-screen">
        <div className="flex justify-center items-center w-full h-full">
          <div style={{
            backgroundColor: color.WHITE
          }} className="w-full">
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
