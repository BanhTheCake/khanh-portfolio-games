import {motion} from 'framer-motion'
import {PhotoView } from 'react-photo-view';

const ux_ui_concepts = [
    { src: "Images/UX_UI_1.png", alt: "UX UI Concept 1" },
    { src: "Images/UX_UI_2.png", alt: "UX UI Concept 2" },
    { src: "Images/UX_UI_3.png", alt: "UX UI Concept 3" },
    { src: "Images/UX_UI_4.png", alt: "UX UI Concept 4" },
    { src: "Images/UX_UI_5.png", alt: "UX UI Concept 5" },
    { src: "Images/UX_UI_6.png", alt: "UX UI Concept 6" },
    { src: "Images/UX_UI_7.png", alt: "UX UI Concept 7" },
    { src: "Images/UX_UI_8.png", alt: "UX UI Concept 8" },
    { src: "Images/UX_UI_9.png", alt: "UX UI Concept 9" },
    { src: "Images/UX_UI_10.png", alt: "UX UI Concept 10" },
    { src: "Images/UX_UI_11.png", alt: "UX UI Concept 11" },
    { src: "Images/UX_UI_12.png", alt: "UX UI Concept 12" },
]

export default function ProjectOne_2() {
  return (
    <>
        <div>
            <div className='flex items-center py-8'>
                <img className="h-12 " src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase" >Environment Design</p>
            </div>
            <div className="flex flex-col pb-10">
                <div className="flex flex-col gap-5 md:px-10 px-5">
                    <div>
                        <PhotoView src="Images/EnviromentDesign_1.png">
                            <img className="w-full" src="Images/EnviromentDesign_1.png" alt="Environment Design 1" />
                        </PhotoView>
                    </div>
                    <div>
                        <PhotoView src="Images/EnviromentDesign_Breakdown_1.png">
                            <img className="w-full" src="Images/EnviromentDesign_Breakdown_1.png" alt="Environment Design Breakdown 2" />
                        </PhotoView>
                    </div>
                </div>
                <div className="flex justify-center py-5">
                    <p className="font-UTM text-center text-sm md:px-10 px-6 normal-case">Inspired by Hue’s historic royal amphitheater, this map is reimagined as a brutal, high-stakes deathmatch arena. The battlefield is a massive, circular stone colosseum with high, weathered ramparts where ghostly imperial banners still flutter in the wind. The cracked stone ground is stained with ancient blood, littered with rusted chains, shattered wooden cages, and iron-spiked barricades that create tactical cover.</p>
                </div>
            </div>
            <div className="flex flex-col pb-10">
                <div className="flex flex-col gap-5 md:px-10 px-5">
                    <div>
                        <PhotoView src="Images/EnviromentDesign_2.png">
                            <img className="w-full" src="Images/EnviromentDesign_2.png" alt="Environment Design 2" />
                        </PhotoView>
                    </div>
                    <div className="relative">
                        <div className="absolute top-0 left-0 h-full items-center p-6 text-sm flex flex-col justify-between w-100 max-w-[50%]"> 
                            <div className="hidden md:block">
                                <h2 className="pb-2 text-[clamp(10px,1.5vw,16px)]">ARCHITECT IDEA</h2>
                                <p className="normal-case leading-snug text-[clamp(8px,1vw,14px)]">The 2025 Calendar Project is inspired by the traditional patterns and decorative motifs of the Nguyen Dynasty. The design combines cultural heritage with a modern layout, highlighting the beauty of Vietnamese royal art.</p>
                            </div>
                            <div className="hidden md:block">
                                <h2 className="pb-2 text-[clamp(10px,1.5vw,16px)]">ARCHITECT IDEA</h2>
                                <p className="normal-case leading-snug text-[clamp(8px,1vw,14px)]">The 2025 Calendar Project is inspired by the traditional patterns and decorative motifs of the Nguyen Dynasty. The design combines cultural heritage with a modern layout, highlighting the beauty of Vietnamese royal art.</p>
                            </div>
                        </div>
                        <PhotoView src="Images/EnviromentDesign_Breakdown_2.png">
                            <img className="w-full" src="Images/EnviromentDesign_Breakdown_2.png" alt="Environment Design Breakdown 2" />
                        </PhotoView>
                    </div>
                </div>
                <div className="flex justify-center py-5">
                    <p className="font-UTM text-center text-sm md:px-10 px-6 normal-case">Inspired by the serene yet mystical atmosphere of Hue’s famous temple, this map is designed as a sanctuary of spiritual warfare. The battlefield is set within a mountain valley wrapped in perpetual fog and ancient pine forests. Zen-style stone bridges, calm reflection ponds, and towering white stupas with golden spires offer multi-layered verticality and vantage points for players.</p>
                </div>
            </div>
             <div className="flex flex-col pb-2 md:pb-10">
                <div className="flex flex-col gap-5 md:px-10 px-5">
                    <div>
                        <PhotoView src="Images/EnviromentDesign_3.png">
                            <img className="w-full" src="Images/EnviromentDesign_3.png" alt="Environment Design 3" />
                        </PhotoView>
                    </div>
                    <div className="relative">
                        <div className="absolute bottom-[5%] left-[22%]  items-center text-sm flex flex-col justify-between w-110 max-w-[35%]"> 
                            <div className="hidden md:block">
                                <h2 className="pb-2 text-[clamp(10px,1.5vw,16px)]">ARCHITECT IDEA</h2>
                                <p className="normal-case leading-snug text-[clamp(8px,1vw,14px)]">The 2025 Calendar Project is inspired by the traditional patterns and decorative motifs of the Nguyen Dynasty. The design combines cultural heritage with a modern layout, highlighting the beauty of Vietnamese royal art.</p>
                            </div>
                        </div>
                        <PhotoView src="Images/EnviromentDesign_Breakdown_3.png">
                            <img className="w-full" src="Images/EnviromentDesign_Breakdown_3.png" alt="Environment Design Breakdown 3" />
                        </PhotoView>
                    </div>
                </div>
                <div className="flex justify-center py-5">
                    <p className="font-UTM text-center text-sm md:px-10 px-5 normal-case">Inspired by the grand entrance to the Hue Imperial Citadel, this map is a sprawling, symmetrical battlefield designed for epic, large-scale sieges. The central focus is the massive, fortress-like gatehouse featuring the iconic Lầu Ngũ Phụng (Five-Phoenix Pavilion) towering above, offering high-ground dominance for snipers and defenders. Below, three arched stone tunnels serve as dangerous, high-risk chokepoints leading into the vast inner courtyards.</p>
                </div>
            </div>
            <div className='flex items-center pb-8'>
                <img className="h-12 " src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase" >UI/UX Concept</p>
            </div>
            <div>
                <div className="flex flex-wrap gap-5 md:px-10 px-5 cursor-pointer">
                    {ux_ui_concepts && ux_ui_concepts.map((item, _) => (
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ ease: "easeInOut", duration: 0.2 }} key={item.src} className="md:flex-1/4 sm:flex-1/3 flex-1/2">
                            <PhotoView src={item.src}>
                                <img className="w-full" src={item.src} alt={item.alt} />
                            </PhotoView>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center pt-10 md:pb-10 pb-5">
                    <p className="font-UTM text-center text-sm md:px-10 px-5 normal-case">The game’s UX/UI features a minimalist, antique design inspired by Nguyen Dynasty aesthetics. Menus and borders are framed with royal lacquer textures and subtle gold-leaf accents, while buttons mimic traditional royal seals and silk scrolls. Navigating the interface feels like unfurling an imperial decree, using a refined color scheme of Pháp Lam Teal, Vermilion Red, and Imperial Yellow to deliver a smooth, modern user experience wrapped in ancient majesty.</p>
                </div>
            </div>
        </div>
    </>
  )
}
