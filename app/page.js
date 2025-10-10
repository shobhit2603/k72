import { HomeBottomText } from "@/components/home/HomeBottomText";
import { HomeHeroText } from "@/components/home/HomeHeroText";
import { Video } from "@/components/home/Video";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen lg:overflow-hidden relative flex flex-col justify-between">
        <HomeHeroText />
        <p className="text-white lg:ml-[80vw] ml-[30vw] mr-2.5 tracking-tight leading-5 font-semibold lg:text-[0.9rem] text-[0.8rem]">
          <span className="mr-17"></span>K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
        </p>
        <HomeBottomText />
      </div>
    </div>
  )
}
