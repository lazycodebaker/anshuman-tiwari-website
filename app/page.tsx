"use client";

import { useEffect, useState } from "react";
import { montrealMedium } from "./font";
import { color, font } from "@/constants";
import Parallax from "@/components/Animation/Parallax";
import WorkList from "@/components/Work/List";
import FlipText from "@/components/Animation/FlipText";
import { getAllDocsFormatted } from "@/lib/docs";

export default function Home() {
  const [works, setWorks] = useState<Array<{
    title: string;
    slug: string;
    desc: string;
    date: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const data = await getAllDocsFormatted();
        setWorks(data);
      } catch (error) {
        console.error("Failed to fetch works:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWorks();
  }, []);

  return (
    <main
      style={{
        backgroundColor: color.WHITE,
      }}
      className="h-full w-full px-4"
    >
      <Parallax id="info" speed={1} key={"info"}>
        <section className="py-16">
          <h1
            style={{
              color: color.BLACK,
              fontSize: font.size.XL,
            }}
            className={`uppercase ${montrealMedium.className}`}
          >
            <FlipText>WORKS</FlipText>
          </h1>
          <div
            style={{
              backgroundColor: color.BLACK,
            }}
            className="w-full mt-2 h-[1.5px] relative"
          />
        </section>
      </Parallax>

      <Parallax
        style={{
          backgroundColor: color.WHITE,
        }}
        id="info"
        speed={4}
        key={"info"}
        className="min-h-screen"
      >
        <div className="flex justify-center items-center w-full h-full">
          <div
            style={{
              backgroundColor: color.WHITE,
            }}
            className="w-full"
          >
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-gray-300 border-t-gray-800"></div>
              </div>
            ) : works.length === 0 ? (
              <div className="text-center text-gray-600">
                No works available.
              </div>
            ) : (
              <ul className="w-full">
                {works.map((work, index) => (
                  <WorkList key={index} work={work} index={index} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </Parallax>
    </main>
  );
}