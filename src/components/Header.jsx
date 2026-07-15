import {motion } from 'framer-motion'

export default function Header() {
  return (
    <div className="bg-black">
    <div className="flex h-screen flex-col items-center justify-center relative px-4">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('../Images/Loading_6.png')] bg-cover bg-center">
            <video 
                className="w-full h-full object-cover object-center" 
                src="Videos/Loading_6.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
            ></video>
            <div className="absolute top-0 left-0 w-full h-full opacity-80 bg-linear-to-t from-black to-transparent"></div>
        </div>

        <motion.div 
            animate={{ y: [0, -30, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}  
            className="text-white z-10 flex flex-col items-center text-center"
        >
            <p className="text-[1.2rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[3rem] lg:leading-[3.8rem] font-UTM uppercase tracking-[0.5rem] sm:tracking-[1rem] md:tracking-[2rem] lg:tracking-[3rem] text-center lg:-mr-6">
                illustration
            </p>
            <p className="text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[14rem] lg:leading-[12.8rem] font-starifeDemo uppercase tracking-wide">
                portfolio
            </p>
            <div className="text-[0.9rem] sm:text-[1.2rem] lg:text-[1.6rem] flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 w-full font-UTM text-center sm:text-left">
                <p>Created By Kain</p>
                <p>Updated : 2026</p>
            </div>
        </motion.div>
    </div>
</div>
  )
}
