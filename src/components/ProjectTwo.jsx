import { useState } from "react";
import { PhotoView } from "react-photo-view"
import { motion, AnimatePresence } from 'framer-motion'

const CharacterDesigns = [
    { 
        name: "Lạc Long Quân", 
        src: "Images/Character_1.png", 
        desc: "Lạc Long Quân is designed as a majestic, muscular mythical king with weather-beaten skin and glowing blue dragon-scale tattoos. He wears battle-scarred armor made of ancient bronze and raw metal, beautifully engraved with traditional Đông Sơn drum patterns. With a resolute face and wild black hair, he wields a massive, solid-metal glaive channeling the power of the ocean to defend his realm." 
    },
    { 
        name: "Âu Cơ", 
        src: "Images/Character_2.png", 
        desc: "Âu Cơ is designed as a graceful, radiant mythical queen with luminous skin and glowing golden vine tattoos. She wears elegant, flowing robes made of divine silk, beautifully adorned with intricate jade and feather ornaments. With a serene face and a crown of wild orchids, she wields a mystical ancient staff channeling the life force of nature to heal her people." 
    },
    { 
        name: "Mộc Tinh", 
        src: "Images/Character_3.png", 
        desc: "Mộc Tinh is designed as a colossal, terrifying tree demon with gnarled, bark-like skin and glowing, toxic green veins. It wears heavily armored layers of corrupted roots and razor-sharp thorns, fiercely adorned with rotten vines and jagged wooden spikes. With a monstrous, hollow-eyed face and a chaotic crown of withered branches, it wields massive, branch-like claws channeling the dark, destructive power of the primeval forest to crush its enemies." 
    },
    { 
        name: "Hồ Ly Tinh", 
        src: "Images/Character_4.png", 
        desc: "Hồ Ly Tinh is designed as a cunning, seductive nine-tailed fox demon with sleek, snow-white fur and glowing, eerie purple markings. She wears flowing, tattered robes of ghostly silk, beautifully adorned with dark spiritual seals and stolen ancient jewelry. With a deceptively beautiful half-human face and a crown of floating phantom fire, she wields razor-sharp spirit claws channeling the illusionary, soul-stealing power of the misty valleys to deceive and consume her prey." 
    },
    { 
        name: "Ngư Tinh", 
        src: "Images/Character_5.png", 
        desc: "Ngư Tinh is designed as a colossal, terrifying sea monster with slick, razor-sharp black scales and glowing crimson eyes that pierce through the dark ocean. Its monstrous body combines the features of a predatory prehistoric fish and a multi-tentacled leviathan, dripping with toxic green slime. Rows of jagged, metallic teeth line its massive jaws, capable of crushing ships, while heavy bone plating protects its head like a demonic crown. Exuding an aura of pure malice and chaotic storm energy, this beast stands as the ultimate tyrannical force of the deep, ready to clash with Lạc Long Quân." 
    },
]

const EnvironmentDesigns = [
    { src: "Images/EnviromentDesign_2_1.png", alt: "Environment Design 1", title: "Map Hồ Ly" },
    { src: "Images/EnviromentDesign_2_2.png", alt: "Environment Design 2", title: "Map Mộc Tinh" },
    { src: "Images/EnviromentDesign_2_3.png", alt: "Environment Design 3", title: "Map Ngư Tinh" },
    { src: "Images/EnviromentDesign_2_4.png", alt: "Environment Design 4", title: "Map Tổng Quan" },
]

const Ux_UI_Designs = [
    { src: "Images/UX_UI_2_1.png", alt: "UX UI Design 1" },
    { src: "Images/UX_UI_2_2.png", alt: "UX UI Design 2" },
    { src: "Images/UX_UI_2_3.png", alt: "UX UI Design 3" },
    { src: "Images/UX_UI_2_4.png", alt: "UX UI Design 4" },
    { src: "Images/UX_UI_2_5.png", alt: "UX UI Design 5" },
    { src: "Images/UX_UI_2_6.png", alt: "UX UI Design 6" },
    { src: "Images/UX_UI_2_7.png", alt: "UX UI Design 7" },
    { src: "Images/UX_UI_2_8.png", alt: "UX UI Design 8" },
    { src: "Images/UX_UI_2_9.png", alt: "UX UI Design 9" },
    { src: "Images/UX_UI_2_10.png", alt: "UX UI Design 10" },
    { src: "Images/UX_UI_2_11.png", alt: "UX UI Design 11" },
    { src: "Images/UX_UI_2_12.png", alt: "UX UI Design 12" },
]

const illustrations = [
    {
        title: "Illustration 1",
        image: "Images/Loading_2_1.png"
    },
    {
        title: "Illustration 2",
        image: "Images/Loading_2_2.png"
    },
    {
        title: "Illustration 3",
        image: "Images/Loading_2_3.png"
    },
];

const cardImgs = [
    { src: "Images/Card_2_1.png", alt: "Card 1" },
    { src: "Images/Card_2_2.png", alt: "Card 2" },
    { src: "Images/Card_2_3.png", alt: "Card 3" },
    { src: "Images/Card_2_4.png", alt: "Card 4" },
    { src: "Images/Card_2_5.png", alt: "Card 5" },
    { src: "Images/Card_2_6.png", alt: "Card 6" },
    { src: "Images/Card_2_7.png", alt: "Card 7" },
    { src: "Images/Card_2_8.png", alt: "Card 8" },
    { src: "Images/Card_2_9.png", alt: "Card 9" },
    { src: "Images/Card_2_10.png", alt: "Card 10" },
    { src: "Images/Card_2_11.png", alt: "Card 11" },
]

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
    <div className="md:px-10 px-5">
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
    </div>
);

export default function ProjectTwo() {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-black">
        <div className="bg-white h-1.5 mx-10 border-2 opacity-30"></div>
        <div className="w-full max-w-360 mx-auto font-UTM text-white p-5 md:p-10 text-2xl md:text-3xl uppercase tracking-wide ">
            <h1 className="py-5 px-5 md:px-0">Project 2: Concept game "Long Quân Hùng Sử"</h1>
           <div className='flex md:items-center py-3 gap-5 md:gap-0'>
                <img className="h-12 " src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM md:text-center text-2xl px-2 uppercase" > Logo "Long Quân Hùng Sử"</p>
            </div>
            <div className="md:pb-6">
               <div className="py-5  flex justify-center w-full">
                <PhotoView src="Images/LogoHungSu.png">
                        <img className="w-250" src="Images/LogoHungSu.png" alt="Logo Long Quân Hùng Sử"  />
                </PhotoView>
                </div>
                <div className="flex justify-center py-3">
                    <p className="font-UTM text-center text-sm px-5 md:px-2 w-250 max-w-full normal-case">The logo for "Long Quân Hùng Sử" prominently features raw, weathered metal, symbolizing the harsh, rugged, yet resilient era of nation-founding in ancient times. The scratches and cracks on the solid metallic texture reflect the sheer intensity of the fierce battles that Lạc Long Quân fought to protect his land and people. Furthermore, this heavy, unrefined metal represents the iron will, unstoppable power, and indomitable spirit of the legendary Dragon lineage.</p>
                 </div>
            </div>
            <div className='flex items-center py-5 md:py-3'>
                <img className="h-12 " src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase" >Character Design</p>
            </div>
            <div className="flex flex-col gap-8">
                { CharacterDesigns && CharacterDesigns.map((item, index) => (
                    <div className="px-5 md:px-10 flex flex-col gap-8">
                        <h2 className="text-center text-xl">{item.name}</h2>
                        <div>
                        <PhotoView src={item.src}>
                            <img className="rounded-sm" src={item.src} alt={item.name}  />
                        </PhotoView>
                        </div>
                        <p className="font-UTM text-center text-sm px-2  normal-case">{item.desc}</p>
                        <div className="block md:hidden h-px border bg-white opacity-80 flex-1"></div>
                    </div>
                ))}
            </div>
            <div className='flex items-center py-10'>
                <img className="h-12 " src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase" > Environment Design</p>
            </div>
            <div className="flex flex-col gap-10 md:px-10 px-5">
                { EnvironmentDesigns && EnvironmentDesigns.map((item, index) => (
                    <div className="relative rounded-sm overflow-hidden cursor-pointer" key={index}>
                        <PhotoView src={item.src}>
                            <img className="w-full rounded-sm" src={item.src} alt={item.alt} />
                        </PhotoView>
                        {/* Lớp phủ gradient đen từ trái sang phải */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />
                        {/* Tiêu đề nằm trên cùng bên trái */}
                        <div className="hidden md:block absolute top-4 left-4">
                            <h3 className="text-white font-semibold text-lg drop-shadow-md">
                                {item.title || item.alt}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center py-10'>
                <img className="h-12 " src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase" >UX / UI Concept</p>
            </div>
            <div className="md:px-10 px-5 grid grid-cols-2 md:grid-cols-3 gap-4">
                { Ux_UI_Designs && Ux_UI_Designs.map((item, index) => (
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ ease: "easeInOut", duration: 0.2 }} className="relative rounded-sm overflow-hidden cursor-pointer" key={index}>
                        <PhotoView src={item.src}>
                            <img className="w-full rounded-sm" src={item.src} alt={item.alt} />
                        </PhotoView>
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center p-5 md:p-10">
                <p className="font-UTM text-center text-sm px-2 normal-case">The UI/UX is designed with a rustic, historical aesthetic utilizing raw bronze, weathered terracotta, and dark bamboo textures from the ancient Âu Lạc era. Interactive buttons are crafted like heavy bronze drum faces engraved with iconic chim lạc (legendary bird) patterns, glowing with a soft green patina upon interaction. Menus and frames are structured around the spiral layouts of Cổ Loa citadel and geometric Đông Sơn motifs, creating an immersive, tactile interface that feels like navigating a legendary ancient relic.</p>
            </div>
            <div className='flex md:items-center gap-5 md:gap-0 pt-5 pb-10 md:py-10'>
                <img className="h-12 " src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM md:text-center text-2xl px-2 uppercase" >Illustration for Loading Screen</p>
            </div>
            
            {/* Tab navigation */}
            <div className="flex flex-wrap justify-center gap-4 px-5 md:px-10 pb-8 ">
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

            <div className='flex items-center pt-8'>
                    <img className="h-12" src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase">Card game design</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:p-10 p-5 py-10">
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
                    <h1 className="text-2xl md:text-xl text-center uppercase ">Card Specials</h1>
                    <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-10 py-10">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ ease: "easeInOut", duration: 0.2 }} className="cursor-pointer">
                            <PhotoView src="Images/Card_Big_1.png" >
                                <img className="w-full" src="Images/Card_Big_1.png" alt="Card 1" />
                            </PhotoView>
                        </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ ease: "easeInOut", duration: 0.2 }} className="cursor-pointer">
                            <PhotoView src="Images/Card_Big_2.png" >
                                <img className="w-full" src="Images/Card_Big_2.png" alt="Card 1" />
                            </PhotoView>
                    </motion.div>
                </div>
                <div className="flex flex-col items-center font-UTM text-white ">
                    <div className="flex items-center justify-center gap-5 w-full max-w-200 pb-4">
                    <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                    <h1 className="text-2xl md:text-xl text-center uppercase ">Card Posters</h1>
                    <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 md:p-10 ">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ ease: "easeInOut", duration: 0.2 }} className="cursor-pointer">
                            <PhotoView src="Images/Card_Poster_2_1.png">
                                <img className="w-full" src="Images/Card_Poster_2_1.png" alt="Card 1" />
                            </PhotoView>
                        </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ ease: "easeInOut", duration: 0.2 }} className="cursor-pointer">
                            <PhotoView src="Images/Card_Poster_2_2.png">
                                <img className="w-full" src="Images/Card_Poster_2_2.png" alt="Card 1" />
                            </PhotoView>
                    </motion.div>
                </div>
        </div>
    </div>
  )
}
