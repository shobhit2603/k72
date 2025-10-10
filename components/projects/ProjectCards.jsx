import Image from "next/image";

export const ProjectCards = (props) => {
    return (
        <>
            <div className="lg:w-1/2 group h-full relative hover:rounded-[40px] overflow-hidden transition-all duration-300 cursor-pointer">
                <Image
                    src={props.image1}
                    alt="Project 1"
                    width={1280}
                    height={960}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                <div className="opacity-0 group-hover:opacity-100 flex items-center justify-center absolute top-0 w-full h-full bg-black/20 transition-all duration-200">
                    <h2 className="uppercase text-6xl font-[font2] border-2 rounded-full text-center text-white border-white px-5 pt-2">View Project</h2>
                </div>
            </div>
            <div className="lg:w-1/2 group h-full relative hover:rounded-[40px] overflow-hidden transition-all duration-300 cursor-pointer">
                <Image
                    src={props.image2}
                    alt="Project 2"
                    width={1280}
                    height={960}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                <div className="opacity-0 group-hover:opacity-100 flex items-center justify-center absolute top-0 w-full h-full bg-black/20 transition-all duration-200">
                    <h2 className="uppercase text-6xl font-[font2] border-2 rounded-full text-center text-white border-white px-5 pt-2">View Project</h2>
                </div>

            </div>
        </>
    )
}
