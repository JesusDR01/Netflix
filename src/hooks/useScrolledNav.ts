import { useEffect, useState } from "react";

export const useScrolledNav = () => {
    const [scrolledNav, setScrolledNav] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const controlNavbar = () => setScrolledNav(window.scrollY > 0);
            window.addEventListener("scroll", controlNavbar);
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
        return () =>{}
    }, []);
    return { scrolledNav };
};
