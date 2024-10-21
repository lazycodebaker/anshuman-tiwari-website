import { AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import SmoothScrolling from "../SmoothScroll";

export default function CustomLayout({ children }: { children: React.ReactNode }) {
    return <SmoothScrolling>
        <AnimatePresence mode="sync">
            <Navbar />
            {children}
        </AnimatePresence>
    </SmoothScrolling>
}