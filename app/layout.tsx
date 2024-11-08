import type { Metadata } from "next"
import "./globals.css"
import { montrealBook } from "./font"
import CustomLayout from "@/components/Layout"

export const metadata: Metadata = {
  title: "Anshuman Tiwari",
  description: "Anshuman Tiwari's personal portfolio showcasing skills in Full-Stack Development. Explore my projects, experience, and passion for technology.",
  icons: [
    {
      rel: "icon",
      url: "/assets/my_image_bw.png"
    }
  ],
  category: "Portfolio",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montrealBook.className} antialiased`}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  )
}
