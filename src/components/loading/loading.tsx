import {motion} from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function LoadingPage(){
    return (
        <motion.div
        initial={{
            opacity:0,
            scale:0.3
        }}
        animate={{
            opacity:1,
            scale:1
        }}
        exit={{
            opacity:0,
            display:"none"
        }}
        transition={{
            duration:0.7
        }}
        className="flex w-screen h-screen items-center-safe justify-center-safe z-50 bg-white"
        >
          <GraduationCap size={90}/>
        </motion.div>
    );
}