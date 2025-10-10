"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navigation/Navbar";
import { FullScreenNav } from "@/components/Navigation/FullScreenNav";

export const NavigationWrapper = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            {/* Navbar should have a menu button that triggers this */}
            <Navbar onMenuClick={() => setShowNav(true)} />

            {/* FullScreenNav opens when showNav is true */}
            {showNav && (
                <FullScreenNav isOpen={showNav} onClose={() => setShowNav(false)} />
            )}
        </>
    );
};
