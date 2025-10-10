"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollWrapper({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.7, // higher = slower scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
            smooth: true,
            direction: "vertical",
            gestureDirection: "vertical",
            smoothTouch: true,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // ✅ Sync GSAP ScrollTrigger with Lenis scroll
        lenis.on("scroll", ScrollTrigger.update);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}