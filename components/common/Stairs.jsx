"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export const Stairs = (props) => {
    const pathname = usePathname();
    const stairParentRef = useRef(null);
    const pageRef = useRef(null);

    useGSAP(function () {
        const tl = gsap.timeline({
            defaults: {
                ease: "power4.inOut",
            },
        });

        tl.to(stairParentRef.current, {
            display: "block"
        })
        tl.from(".stair", {
            height: 0,
            stagger: {
                amount: -0.2
            }
        })
        tl.to(".stair", {
            y: "100%",
            stagger: {
                amount: -0.2
            }
        })
        tl.to(stairParentRef.current, {
            display: "none"
        })
        tl.to(".stair", {
            y: 0
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1,
            // scale: 1.2,
        })

    }, [pathname])

    return (
        <div>
            <div ref={stairParentRef} className="h-screen w-full fixed z-10 top-0">
                <div className="h-full w-full flex">
                    <div className="stair h-full lg:w-1/5 w-1/3 bg-black"></div>
                    <div className="stair h-full lg:w-1/5 w-1/3 bg-black"></div>
                    <div className="stair h-full lg:w-1/5 w-1/3 bg-black"></div>
                    <div className="stair h-full lg:w-1/5 bg-black"></div>
                    <div className="stair h-full lg:w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}
