import React, { useState } from 'react'
import { PhotoView } from 'react-photo-view';
import { motion, AnimatePresence } from 'framer-motion';

const illustrations = [
    {
        title: "Illustration 1",
        image: "Images/Loading_1.png",
        video: "Videos/Loading_1.mp4",
        processDescription: "Standing as the crown jewel of the imperial map, this grand fortress gate draws direct inspiration from Hue’s legendary Ngọ Môn Gate. Players are greeted by a massive, U-shaped stone pedestal pierced by five arched portals—with the golden center gate, historically reserved for the emperor, now serving as a highly contested choke point for players to control.",
        process: [
            "Images/Process_loading_1.png",
            "Images/Process_loading_2.png",
            "Images/Process_loading_3.png",
        ],
    },
    {
        title: "Illustration 2",
        image: "Images/Loading_2.png",
        video: "Videos/Loading_2.mp4",
        processDescription: "As the enemy approaches, the mystical fan begins to awaken, radiating a vibrant, ethereal energy that cuts through the darkness. Swirling currents of cyan and neon-blue light pulse from its frame, illuminating the protagonist's determined face and highlighting the intricate textures of their armor. ",
        process: [
            "Images/Process_loading_2_1.png",
            "Images/Process_loading_2_2.png",
            "Images/Process_loading_2_3.png",
        ],
    },
    {
        title: "Illustration 3",
        image: "Images/Loading_3.png",
        video: "Videos/Loading_3.mp4",
        processDescription: "In the heart of a mystical realm, the protagonist stands poised with a gleaming sword held ready for battle. Spreading wide from their back is a pair of majestic, radiant white phoenix wings, each feather glowing with an ethereal light.",
        process: [
            "Images/Process_loading_3_1.png",
            "Images/Process_loading_3_2.png",
            "Images/Process_loading_3_3.png",
        ],
    },
    {
        title: "Illustration 4",
        image: "Images/Loading_4.png",
        video: "Videos/Loading_4.mp4",
        processDescription: "Guarding the threshold of the imperial palace, a monstrous tiger beast stands proud and defiant, completely blocking the grand stone staircase. With a massive, muscular frame and eyes burning with primal fury, the creature radiates an undeniable aura of absolute dominance.",
        process: [
            "Images/Process_loading_4_1.png",
            "Images/Process_loading_4_2.png",
            "Images/Process_loading_4_3.png",
        ],
    },
    {
        title: "Illustration 5",
        image: "Images/Loading_5.png",
        video: "Videos/Loading_5.mp4",
        processDescription: "Rising slowly behind the temple's imperial silhouette, a colossal water dragon begins to materialize from a hidden lake. Its massive body, formed entirely of churning, translucent river water, glows with a soft, bioluminescent light that reflects off the dark leaves of the surrounding forest.",
        process: [
            "Images/Process_loading_5_1.png",
            "Images/Process_loading_5_2.png",
            "Images/Process_loading_5_3.png",
        ],
    },
    {
        title: "Illustration 6",
        image: "Images/Loading_6.png",
        video: "Videos/Loading_6.mp4",
        processDescription: "Under a dramatic night sky filled with swirling, roiling clouds of indigo and gold, a colossal, skeletal elephant beast begins to materialize. Its massive bones, etched with age and ancient magic, break through the heavy atmosphere, towering over the jagged mountain range.",
        process: [
            "Images/Process_loading_6_1.png",
            "Images/Process_loading_6_2.png",
            "Images/Process_loading_6_3.png",
        ],
    },
];


const ImageWithSkeleton = ({ src, alt, className = "", wrap = true, aspect = "aspect-[4/3]" }) => {
    const [loaded, setLoaded] = useState(false);
    const handleImgRef = (node) => {
        if (node && node.complete && node.naturalWidth > 0) {
            setLoaded(true);
        }
    };
 
    const img = (
        <div className={`relative overflow-hidden ${!loaded ? aspect : ""}`}>
            {!loaded && (
                <div className="absolute inset-0 bg-gray-700 animate-pulse" />
            )}
            <PhotoView src={src}>
            <img
                ref={handleImgRef}
                className={`${className} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
            />
            </PhotoView>
        </div>
    );
 
    return wrap ? <PhotoView src={src}>{img}</PhotoView> : img;
};
const IllustrationPanel = ({ illustration }) => (
    <div className="md:px-10 px-5 md:pb-10 pb-5">
        <div className="relative">
            <ImageWithSkeleton
                    src={illustration.image}
                    alt={illustration.title}
                    className="w-full"
                    aspect="aspect-[16/9]"
                />
            {/* Lớp phủ gradient đen từ trái sang phải */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none" />
            {/* Tiêu đề nằm trên cùng bên trái */}
            <div className="hidden md:block absolute top-4 left-4">
                <h3 className="text-white font-semibold text-lg drop-shadow-md">
                    {illustration.title}
                </h3>
            </div>
        </div>
        <div className="flex md:gap-6 flex-col lg:flex-row">
            <div className="flex-3">
                <div className='flex items-center py-4'>
                    <img className="h-8 rotate-90" src="Images/WhiteArrow.png" alt="Icon Arrow" />
                    <p className="font-UTM text-center px-2 uppercase text-base">Motion Design</p>
                </div>
                <div>
                    <video className="w-full" src={illustration.video} autoPlay loop muted playsInline controls />
                </div>
            </div>
            <div className="flex-4 flex flex-col">
                <div className='flex items-center py-4'>
                    <img className="h-8 rotate-90" src="Images/WhiteArrow.png" alt="Icon Arrow" />
                    <p className="font-UTM text-center px-2 uppercase text-base">Process</p>
                </div>
                <div className="flex bg-gray-600 flex-col p-3 gap-5 flex-1 justify-between">
                    <div className="hidden md:flex">
                        <p className="text-sm normal-case">{illustration.processDescription}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                        {illustration.process.map((src, i) => (
                            <div className="flex-1" key={src}>
                                <PhotoView src={src}>
                                    <img className="w-full" src={src} alt={`Illustration ${i + 1}`} />
                                </PhotoView>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const cardImgs = [
    { src: "Images/Card_1.png", alt: "Card 1" },
    { src: "Images/Card_2.png", alt: "Card 2" },
    { src: "Images/Card_3.png", alt: "Card 3" },
    { src: "Images/Card_4.png", alt: "Card 4" },
    { src: "Images/Card_5.png", alt: "Card 5" },
    { src: "Images/Card_6.png", alt: "Card 6" },
    { src: "Images/Card_7.png", alt: "Card 7" },
    { src: "Images/Card_8.png", alt: "Card 8" },
    { src: "Images/Card_9.png", alt: "Card 9" },
    { src: "Images/Card_10.png", alt: "Card 10" },
    { src: "Images/Card_11.png", alt: "Card 11" },
    { src: "Images/Card_12.png", alt: "Card 12" },
    { src: "Images/Card_13.png", alt: "Card 13" },
    { src: "Images/Card_14.png", alt: "Card 14" },
    { src: "Images/Card_15.png", alt: "Card 15" },
    { src: "Images/Card_16.png", alt: "Card 16" },
    { src: "Images/Card_17.png", alt: "Card 17" },
    { src: "Images/Card_18.png", alt: "Card 18" },
    { src: "Images/Card_19.png", alt: "Card 19" },
    { src: "Images/Card_20.png", alt: "Card 20" },
]

export default function ProjectOne_3() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className='flex md:items-center md:py-6 pb-10 gap-4 md:gap-0'>
                <img className="h-12" src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM md:text-center text-2xl px-2 uppercase">ILLUSTRATION FOR LOADING SCREEN</p>
            </div>

            {/* Tab navigation */}
            <div className="flex flex-wrap justify-center gap-4 md:px-10 px-5 pb-8 ">
                {illustrations.map((item, index) => (
                    <button
                        key={item.title}
                        onClick={() => setActiveTab(index)}
                        className={`font-UTM capitalize text-sm md:px-5 px-2 py-2 border transition-colors duration-200 cursor-pointer 
                            ${activeTab === index
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-white border-white/40 hover:border-white'}`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            {/* Active illustration panel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                    <IllustrationPanel illustration={illustrations[activeTab]} />
                </motion.div>
            </AnimatePresence>

            <div className='flex items-center py-4'>
                    <img className="h-12" src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase">Button design</p>
            </div>
            <div className="flex flex-col justify-center py-5">
                <div className="md:px-10 px-2">
                <PhotoView src="Images/Btn_design.png">
                    <img className="w-full" src="Images/Btn_design.png" alt="Button design"  />
                </PhotoView>
                <p className="font-UTM text-center text-sm md:px-10 px-5 normal-case">The buttons are designed as sleek, dark lacquer plaques bordered by elegant gold leaf. On hover, they emit a warm, brushed Imperial Yellow glow. Clicking triggers a crisp press animation accompanied by a subtle ceremonial gong sound, delivering satisfying modern feedback with a royal touch.</p>
                </div>
            </div>
             <div className='flex items-center pt-8'>
                    <img className="h-12" src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase">Item concept</p>
            </div>
            <div>
                <div className="md:px-10">
                <div className="flex pt-10 items-center gap-6  md:gap-0 lg:flex-row flex-col-reverse">
                        <div className="flex flex-col gap-6 flex-2">
                            <h2 className="font-UTM text-center text-2xl py-5 lg:py-0">Item concept 1</h2>
                            <p className="font-UTM text-center text-sm md:px-10 px-5 normal-case">A sacred jade or bronze chime shaped like a crescent cloud, modeled after the ceremonial instruments of the Nguyen Dynasty. Engraved with elegant royal inscriptions, it emits a resonant, metallic hum when struck. When activated, it rings out a sharp, purifying sound wave that stuns nearby enemies and provides a protective barrier to the user.</p>
                        </div>
                        <div className="flex-3">
                            <PhotoView src="Images/Item_concept_2.png">
                                <img className="w-full " src="Images/Item_concept_2.png" alt="Item concept 2"  />
                            </PhotoView>
                        </div>
                    </div>
                    <div className="overflow-hidden relative aspect-video">
                        <div className="hidden lg:flex absolute top-[20%] right-0 w-150 max-w-full flex-col gap-5">
                            <h2 className="font-UTM text-center text-2xl ">Item concept 2</h2>
                            <p className="font-UTM text-center text-sm px-10 normal-case">An antique bronze censer used in royal chambers to purify the air and calm the mind. It features delicate openwork carvings that allow thin ribbons of aromatic agarwood smoke to rise. When activated, it glows with a warm, golden hue, casting a serene aura that boosts player focus and restores spiritual energy.</p>
                        </div>
                         <PhotoView src="Images/Item_concept_1.png">
                            <img className="w-full absolute top-0 left-0 lg:left-[-30%]" src="Images/Item_concept_1.png" alt="Item concept 1"  />
                         </PhotoView>
                    </div>
                    
                </div>
            </div>
            <div className='flex items-center pt-8'>
                    <img className="h-12" src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase">Card game design</p>
            </div>
            <div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5 md:px-10 px-5 p-10">
                    { cardImgs && cardImgs.map((item, index) => (
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ ease: "easeInOut", duration: 0.2 }} className="cursor-pointer" key={index}>
                            <PhotoView src={item.src}>
                                <img className="w-full" src={item.src} alt={item.alt} />
                            </PhotoView>
                        </motion.div>
                    ))}
                </div>
                <div className="flex flex-col items-center font-UTM text-white ">
                    <div className="flex items-center justify-center gap-5 w-full max-w-200 pb-4">
                    <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                    <h1 className="text-2xl md:text-xl text-center uppercase ">Card Posters</h1>
                    <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 md:p-10 p-5">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ ease: "easeInOut", duration: 0.2 }} className="cursor-pointer">
                            <PhotoView src="Images/Card_Poster_1_1.png" >
                                <img className="w-full" src="Images/Card_Poster_1_1.png" alt="Card 1" />
                            </PhotoView>
                        </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ ease: "easeInOut", duration: 0.2 }} className="cursor-pointer">
                            <PhotoView src="Images/Card_Poster_1_2.png" >
                                <img className="w-full" src="Images/Card_Poster_1_2.png" alt="Card 1" />
                            </PhotoView>
                    </motion.div>
                    <div className="flex-1"></div>
                </div>
            </div>
        </div>
    )
}