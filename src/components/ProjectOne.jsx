import {PhotoView } from 'react-photo-view';
import ProjectOne_2 from './ProjectOne_2';
import ProjectOne_3 from './ProjectOne_3';

export default function ProjectOne() {
  return (
    <div className="bg-black">
        <div className="w-full max-w-360 mx-auto font-UTM text-white p-5 md:p-10 text-2xl md:text-3xl uppercase tracking-wide">
            <h1 className="px-5 md:px-0 py-3">Project 1 concept game "loạn Thế"</h1>
            <div className='flex items-center py-3'>
                <img className="h-12 " src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase" > Logo "Loạn Thế"</p>
            </div>
            <div className="py-5  flex justify-center w-full">
                <img className="w-250" src="Images/LogoLoanThe.png" alt="Logo Loạn Thế"  />
            </div>
            <div className="flex justify-center py-3">
                <p className="font-poppins text-center text-sm px-2 w-250 normal-case">The logo for "Loạn Thế" is a striking fusion of historical grandeur and chaotic warfare. It draws heavy inspiration from the majestic architecture of the Nguyen Dynasty and is brought to life using a prestigious, high-contrast imperial court color palette.</p>
            </div>
             <div className='flex items-center py-5'>
                <img className="h-12 " src="Images/WhiteArrow.png" alt="Icon Arrow" />
                <p className="font-UTM text-center text-2xl px-2 uppercase" >Character Design</p>
            </div>
            <div className="flex flex-wrap gap-5 md:px-10 px-5">
                <div className="w-full">
                <PhotoView src="Images/CharacterDesign_1.png">
                    <img className="w-full " src="Images/CharacterDesign_1.png" alt="Character Design" />
                </PhotoView>
                </div>
                <div className="flex-1 w-full">
                <PhotoView src="Images/CharacterDesign_2.png" >
                    <img className="w-full" src="Images/CharacterDesign_2.png" alt="Character Nữ" />
                </PhotoView>
                </div>
                <div className="flex-1 w-full">
                <PhotoView src="Images/CharacterDesign_3.png">
                    <img className="w-full" src="Images/CharacterDesign_3.png" alt="Character Nam" />
                </PhotoView>
                </div>
            </div>
            <div className="flex pt-10 pb-5 flex-col items-center">
                <p className="font-poppins text-center text-sm px-2 w-250 max-w-full normal-case">This design embodies the faded majesty of the Nguyen Dynasty, blending battle-ready armor with Hue's royal textiles. The armor plates and silk robes are adorned with intricate imperial court embroidery and traditional royal patterns.</p>
            </div>
            <div className="flex flex-col items-center font-UTM text-white py-5">
                            <div className="flex items-center justify-center gap-5 w-full max-w-200 pb-4">
                            <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                            <h1 className="text-2xl md:text-3xl text-center uppercase ">Process / Idea Breakdown</h1>
                            <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                            </div>
                          
            </div>
            <div className="flex flex-col items-center gap-5 md:px-10 px-5">
                <div>
                <PhotoView src="Images/Breakdown_1.png">
                    <img className="w-full" src="Images/Breakdown_1.png" alt="Breakdown 1" />
                </PhotoView>
                </div>
                <div>
                 <PhotoView src="Images/Breakdown_2.png">
                    <img className="w-full" src="Images/Breakdown_2.png" alt="Breakdown 2" />
                 </PhotoView>
                </div>
                <div>
                 <PhotoView src="Images/Breakdown_3.png">
                    <img className="w-full" src="Images/Breakdown_3.png" alt="Breakdown 3" />
                 </PhotoView>
                </div>
            </div>
            <ProjectOne_2 />
            <ProjectOne_3 />
        </div>
    </div>
  )
}
