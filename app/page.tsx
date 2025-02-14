"use client";

import { montrealMedium } from "./font";
import { color, font } from "@/constants";
import Parallax from "@/components/Animation/Parallax";
import FlipText from "@/components/Animation/FlipText";
import WorkList from "@/components/Work/List";

const works: Array<{ index: number, title: string, url: string }> = [
  {
    index: 1,
    title: "Sliding Window Object Detection with OpenCV",
    url: "https://github.com/lazycodebaker/Sliding-Window-Object-Detection"
  },
  {
    index: 2,
    title: "Autoencoder-based Anomaly Detection",
    url: "https://github.com/lazycodebaker/Video-Anomaly-Detection"
  },
  {
    index: 3,
    title: "Epipolar Geometry Visualization",
    url: "https://github.com/lazycodebaker/Epipolar-Geometry-Visualization"
  },
  {
    index:4,
    tittle :"MNIST GAN in C++",
    url : "https://github.com/lazycodebaker/GAN-CPP"
  },
  {
    index: 5,
    title: "Schizophrenia Classification from EEG",
    url: "https://github.com/lazycodebaker/Schizophrenia-Classification-from-EEG"
  },
  {
    index: 6,
    title: "File Monitoring and Sorting Utility",
    url: "https://github.com/lazycodebaker/download-files-monitoring"
  },
  {
    index: 7,
    title: "Blockchain Based MCLUB ERC Token",
    url: "https://github.com/lazycodebaker/mclub"
  },
  {
    index: 8,
    title: "DAPP Voting System",
    url: "https://github.com/lazycodebaker/Voting-System-DAPP"
  },
  {
    index: 9,
    title: "Gnome Title Bar Reduce CSS",
    url: "https://github.com/lazycodebaker/Gnome-TItle-Bar-Size-Reduce"
  }
];

export default function Home() {
  /*
  const [, setWorks] = useState<Array<{
    title: string;
    slug: string;
    desc: string;
    date: string;
  }>>([]);
  */

  //  const [isLoading, setIsLoading] = useState(true);

  /*
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
  */

  return (
    <main
      style={{
        backgroundColor: color.WHITE,
      }}
      className="h-screen w-full px-4"
    >
      <Parallax id="info" speed={1} key={"info"}>
        <section className="py-16">
          <div
            style={{
              color: color.BLACK,
              fontSize: font.size.XL,
            }}
            className={`uppercase ${montrealMedium.className}`}
          > <FlipText>WORKS</FlipText>
          </div>
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

        <ul className="w-full">
          {works.map((work, index) => (
            <WorkList key={index} work={work} index={index} />
          ))}
        </ul>

        {/*
        <div className="flex justify-center items-center w-full h-full">
          <div
            style={{
              backgroundColor: color.WHITE,
            }}
            className="w-full"
          >
             isLoading ? (
              <div className="flex justify-center items-center h-full">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-gray-300 border-t-gray-800"></div>
              </div>
            ) : works.length === 0 ? (
              <div className="text-center text-gray-600">
                No works available.
              </div>
            ) : (

          </div>
        </div>
              */}
      </Parallax>
    </main>
  );
}
