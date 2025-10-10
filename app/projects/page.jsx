"use client";

import { ProjectCards } from "@/components/projects/ProjectCards";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const Projects = [
        {
            image1: "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
            image2: "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e"
        },
        {
            image1: "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
            image2: "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14"
        },
        {
            image1: "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
            image2: "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479"
        },
        {
            image1: "https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860",
            image2: "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47"
        },
        {
            image1: "https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f",
            image2: "https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
        },
        {
            image1: "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
            image2: "https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd"
        },
        {
            image1: "https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124",
            image2: "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757"
        },
        {
            image1: "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
            image2: "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821"
        },
    ]

    useGSAP(function () {
        gsap.from(".projects", {
            height: "100px",
            stagger: {
                amount: 0.2,
            },
            scrollTrigger: {
                trigger: ".cards",
                start: "top 100%",
                end: "bottom -150%",
                scrub: true,
            }
        })
    });

    return (
        <div className="lg:p-3 p-2">
            <div className="lg:pt-[40vh] pt-[45vh]">
                <h2 className="font-[font2] uppercase lg:text-[13vw] text-[19vw]">
                    Work<sup className="lg:text-[2.6vw] text-[4vw] lg:-top-28 -top-11 relative">16</sup>
                </h2>
            </div>
            <div className="lg:-mt-20 -mt-8 cards">
                {Projects.map(function (elem, idx) {
                    return (
                        <div className="projects w-full lg:h-[550px] mb-2 flex lg:flex-row flex-col lg:gap-2.5 gap-2 [will-change:transform,opacity] overflow-hidden" key={idx}>
                            <ProjectCards image1={elem.image1} image2={elem.image2} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
