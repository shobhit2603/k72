import { Video } from "./Video"

export const HomeHeroText = () => {
    return (
        <div className="text-white font-[font1] lg:-mt-3 mt-120 pt-5 text-center">
            <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[9vw] leading-[10.5vw]">The spark for</div>
            <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[9vw] leading-[10.5vw]">
                All
                <div className="lg:h-[7vw] h-[9vw] lg:w-[16vw] w-[20vw] rounded-full lg:-mt-5 overflow-hidden [transform:translateZ(0)]">
                    <Video />
                </div>
                Things
            </div>
            <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[9vw] leading-[10.5vw]">Creative</div>
        </div>
    )
}