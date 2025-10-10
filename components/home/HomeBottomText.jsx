import Link from "next/link"

export const HomeBottomText = () => {
    return (
        <div className="font-[font2] flex items-center justify-center lg:gap-5 gap-4">
            <div className="text-white border-3 lg:h-25 lg:leading-[6vw] leading-[8vw] lg:mb-2 mb-3 flex items-center lg:px-8 px-3 border-white hover:border-[#d3fd50] hover:text-[#d3fd50] rounded-full uppercase">
                <Link href="/projects" className="lg:text-[7vw] text-[11vw] lg:mt-4 mt-2 tracking-tight">Work</Link>
            </div>
            <div className="text-white border-3 lg:h-25 lg:leading-[6vw] leading-[8vw] lg:mb-2 mb-3 flex items-center lg:px-8 px-3 border-white hover:border-[#d3fd50] hover:text-[#d3fd50] rounded-full uppercase">
                <Link href="/agence" className="lg:text-[7vw] text-[11vw] lg:mt-4 mt-2 tracking-tight">Agency</Link>
            </div>
        </div>
    )
}