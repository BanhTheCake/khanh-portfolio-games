import PsIcon from "/Images/IconPs.svg"
import AiIcon from "/Images/IconAi.svg"
import AeIcon from "/Images/IconAe.svg"

export default function Information() {
  return (
     <div className="bg-black">
        <div className="w-full max-w-280 mx-auto font-UTM text-white pt-10 md:px-10">
            <div className="flex flex-col md:flex-row items-center gap-5 pb-5 md:pb-10">
              <div className="flex shrink-0 items-center justify-center overflow-hidden">
                <img className=" h-80 md:h-100 rounded-md" src="Images/Information_1.JPG" alt="Ảnh Đại Diện" />
              </div>
              <div className=" flex flex-col gap-5 px-10">
                <div className="flex flex-col gap-3 pb-2">
                  <h1 className="text-3xl">About me</h1>
                  <div className="flex border-2 p-3 rounded-xl border-white/80">
                    <p>Hi, Im Khánh, 23 years old Illustrator living in Da Nang city.
                        I create art for games, illustration visual led, etc. I love drawing,
                        creating things about Vietnamese culture.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-2">
                  <h1 className="text-3xl">Education and experience</h1>
                  <div className="flex flex-col border-2 p-3 rounded-xl border-white/80">
                    <p>- Graduated from DaNang Architecture University as Designer</p>
                    <p>- Intern at Koei Tecmo software DaNang</p>
                    <p>- Intern at Hue Monuments Conservation Centre</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="flex flex-col gap-3 pb-5 px-10 md:px-0">
                  <h1 className="text-3xl">Personal skills</h1>
                  <div className="flex flex-col border-2 p-3 rounded-xl border-white/80">
                    <div className="flex items-center gap-1">
                     <img className="w-12" src={PsIcon} alt="AE" />
                      <p>: I use Photoshop most, for drawing brush</p>
                    </div>
                    <div className="flex items-center gap-1">
                     <img className="w-12" src={AiIcon} alt="AE" />
                      <p>: I use Illustration for create arts need high quality to print</p>
                    </div>
                    <div className="flex items-center gap-1">
                     <img className="w-12" src={AeIcon} alt="AE" />
                      <p>: I use After Effect for create motion art, visual led</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-2 px-10 md:px-0">
                  <h1 className="text-3xl md:hidden">Contact me</h1>
                   <div className="flex border-2 md:border-0 md:py-0 p-3 rounded-xl border-white/80 md:items-center md:justify-between flex-col md:flex-row gap-3 ">
                    <div className="flex items-center gap-2">
                     <img className="w-8" src={"Images/tel.png"} alt="Số điện thoại" />
                      <p> 091 302 9417 </p>
                    </div>
                    <div className="flex items-center gap-2">
                     <img className="w-8" src={"Images/gmail.png"} alt="Instagram" />
                      <p>Instagram: <a className="text-purple-400" href="https://www.instagram.com/_kainlee_" target="_blank">_Kainlee_</a></p>
                    </div>
                    <div className="flex items-center gap-2">
                     <img className="w-8" src={"Images/mail.png"} alt="Gmail" />
                      <p><a className="text-green-400" href="mailto:kainlee0801@gmail.com">kainlee0801@gmail.com</a></p>
                    </div>
                  </div>
                </div>
        </div>
    </div>
  )
}
