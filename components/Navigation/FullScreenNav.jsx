"use client";
import Image from "next/image"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const FullScreenNav = ({ onClose }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "auto");
    }, []);


    const enterTl = useRef();
    const exitTl = useRef();

    // Entry animation
    useGSAP(() => {
        enterTl.current = gsap.timeline();

        enterTl.current
            .from(".stair", {
                height: 0,
                stagger: { amount: -0.2 },
                duration: 0.5,
                ease: "power4.inOut",
            })
            .from(
                ".closeBtn",
                {
                    x: 50,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power4.out",
                },
                "-=0.2"
            )
            .from(
                ".link",
                {
                    opacity: 0,
                    rotateX: -90,
                    transformOrigin: "top",
                    stagger: { amount: 0.2 },
                    duration: 0.5,
                    ease: "power4.out",
                },
                "-=0.1"
            );
    });

    // Exit animation
    const handleClose = () => {
        if (exitTl.current && exitTl.current.isActive()) return;

        exitTl.current = gsap.timeline({
            defaults: { ease: "power4.inOut" },
            onComplete: onClose,
        });

        exitTl.current
            .to(".link", {
                opacity: 0,
                duration: 0.5,
            })
            .to(
                ".closeBtn",
                {
                    x: 50,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power4.out"
                },
                "-=0.2"
            )
            .to(
                ".stair",
                {
                    height: 0,
                    stagger: { amount: -0.25 },
                    duration: 0.4,
                    ease: "power4.inOut",
                },
                "-=0.1"
            );
    };

    return (
        <div id="fullScreenNav" className="fixed inset-0 text-white overflow-hidden h-screen w-full z-[9999] py-30">
            <div className="h-screen w-full fixed top-0">
                <div className="h-full w-full flex">
                    <div className="stair h-full lg:w-1/5 w-1/2 bg-black"></div>
                    <div className="stair h-full lg:w-1/5 w-1/2 bg-black"></div>
                    <div className="stair h-full lg:w-1/5 bg-black"></div>
                    <div className="stair h-full lg:w-1/5 bg-black"></div>
                    <div className="stair h-full lg:w-1/5 bg-black"></div>
                </div>
            </div>
            <div>
                <div className="absolute top-2 left-2 cursor-pointer" onClick={handleClose}>
                    <svg className="lg:w-30 w-25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                        <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
                <button className="closeBtn absolute -top-11 -right-11 p-2" onClick={handleClose}>
                    <svg className="lg:h-50 h-45 lg:w-50 w-45 cursor-pointer hover:text-[#d3fd50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.30} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="lg:mt-13 mt-50 flex flex-col h-full justify-around">
                    <div className="link cursor-pointer relative border-t-1 border-white/50">
                        <h1 className="font-[font2] uppercase lg:text-[8vw] text-[15vw] lg:leading-[0.8] leading-[0.6] pb-1.5 lg:pt-5 pt-4.5 text-center">Work</h1>
                        <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
                            <div className="moveX flex items-center">
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">See Everything</h2>
                                <Image
                                    src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                                    alt="Navigation Image"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">See Everything</h2>
                                <Image
                                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                                    alt="Navigation Image"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                            </div>
                            <div className="moveX flex items-center">
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">See Everything</h2>
                                <Image
                                    src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                                    alt="Navigation Image"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">See Everything</h2>
                                <Image
                                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                                    alt="Navigation Image"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="link cursor-pointer relative border-t-1 border-white/50">
                        <h1 className="font-[font2] uppercase lg:text-[8vw] text-[15vw] lg:leading-[0.8] leading-[0.6] pb-1.5 lg:pt-5 pt-4.5 text-center">Agency</h1>
                        <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
                            <div className="moveX flex items-center">
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Know Us</h2>
                                <Image
                                    src="https://k72.ca/images/teamMembers/Michele_640x290.jpg?w=640&h=290&s=fc2d5857a514aaf26bec2eb052a2d734"
                                    alt="Navigation Image"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Know Us</h2>
                                <Image
                                    src="https://k72.ca/images/teamMembers/Michele_640x290.jpg?w=640&h=290&s=fc2d5857a514aaf26bec2eb052a2d734"
                                    alt="Navigation Image"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                            </div>
                            <div className="moveX flex items-center">
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Know Us</h2>
                                <Image
                                    src="https://k72.ca/images/teamMembers/Michele_640x290.jpg?w=640&h=290&s=fc2d5857a514aaf26bec2eb052a2d734"
                                    alt="Navigation Image"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Know Us</h2>
                                <Image
                                    src="https://k72.ca/images/teamMembers/Michele_640x290.jpg?w=640&h=290&s=fc2d5857a514aaf26bec2eb052a2d734"
                                    alt="Navigation Image"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="link cursor-pointer relative border-t-1 border-white/50">
                        <h1 className="font-[font2] uppercase lg:text-[8vw] text-[15vw] lg:leading-[0.8] leading-[0.6] pb-1.5 lg:pt-5 pt-4.5 text-center">Contact</h1>
                        <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
                            <div className="moveX flex items-center">
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Send Us A Fax</h2>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="black" // Sets the heart color
                                    className="h-[7vw] w-[7vw] shrink-0 mx-7" // Your existing styles
                                >
                                    {/* This new path creates the stylized shape */}
                                    <path d="M12.72,20.69,12,21.41l-.72-.72C6.05,15.47,2,11.7,2,7.5,2,4.42,4.42,2,7.5,2A5.4,5.4,0,0,1,12,4.2,5.4,5.4,0,0,1,16.5,2C19.58,2,22,4.42,22,7.5c0,4.2-4.05,7.97-9.28,13.19Z" />
                                </svg>
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Send Us A Fax</h2>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="black" // Sets the heart color
                                    className="h-[7vw] w-[7vw] shrink-0 mx-7" // Your existing styles
                                >
                                    {/* This new path creates the stylized shape */}
                                    <path d="M12.72,20.69,12,21.41l-.72-.72C6.05,15.47,2,11.7,2,7.5,2,4.42,4.42,2,7.5,2A5.4,5.4,0,0,1,12,4.2,5.4,5.4,0,0,1,16.5,2C19.58,2,22,4.42,22,7.5c0,4.2-4.05,7.97-9.28,13.19Z" />
                                </svg>
                            </div>
                            <div className="moveX flex items-center">
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Send Us A Fax</h2>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="black" // Sets the heart color
                                    className="h-[7vw] w-[7vw] shrink-0 mx-7" // Your existing styles
                                >
                                    {/* This new path creates the stylized shape */}
                                    <path d="M12.72,20.69,12,21.41l-.72-.72C6.05,15.47,2,11.7,2,7.5,2,4.42,4.42,2,7.5,2A5.4,5.4,0,0,1,12,4.2,5.4,5.4,0,0,1,16.5,2C19.58,2,22,4.42,22,7.5c0,4.2-4.05,7.97-9.28,13.19Z" />
                                </svg>
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Send Us A Fax</h2>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="black" // Sets the heart color
                                    className="h-[7vw] w-[7vw] shrink-0 mx-7" // Your existing styles
                                >
                                    {/* This new path creates the stylized shape */}
                                    <path d="M12.72,20.69,12,21.41l-.72-.72C6.05,15.47,2,11.7,2,7.5,2,4.42,4.42,2,7.5,2A5.4,5.4,0,0,1,12,4.2,5.4,5.4,0,0,1,16.5,2C19.58,2,22,4.42,22,7.5c0,4.2-4.05,7.97-9.28,13.19Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="link cursor-pointer relative border-y-1 border-white/50">
                        <h1 className="font-[font2] uppercase lg:text-[8vw] text-[15vw] lg:leading-[0.8] leading-[0.6] pb-1.5 lg:pt-5 pt-4.5 text-center">Blog</h1>
                        <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
                            <div className="moveX flex items-center">
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Read Articles</h2>
                                <Image
                                    src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                                    alt="Navigation Image"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Read Articles</h2>
                                <img
                                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                                    alt="Navigation Gif"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                            </div>
                            <div className="moveX flex items-center">
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Read Articles</h2>
                                <Image
                                    src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                                    alt="Navigation Image"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                                <h2 className="whitespace-nowrap font-[font2] uppercase text-[8vw] leading-[0.8] lg:pt-5 pt-1 text-center">Read Articles</h2>
                                <img
                                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                                    alt="Navigation Gif"
                                    width={320}
                                    height={145}
                                    className="rounded-full lg:h-22 h-13 lg:w-60 w-40 shrink-0 object-cover lg:mx-7 mx-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
