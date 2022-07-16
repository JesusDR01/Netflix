import Image from "next/image";
import NextLink from "next/link";
import React, { useState } from "react";
import { StyledMobileNav } from "./MobileNav.styled";
import  netflixData from "src/models/netflixData.json";
import { useScrolledNav } from "src/hooks/useScrolledNav";

export const MobileNav = ({...props}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };
    const { scrolledNav } = useScrolledNav();

    return (
        <StyledMobileNav menuOpen={menuOpen} scrolledNav={scrolledNav} {...props}>
            <div className={"logo-menu-wrapper"}>
                <div className={"image-wrapper"}>
                    <Image
                        src="/assets/hamburger.gif"
                        alt="menu"
                        width={24}
                        height={24}
                        quality={70}
                        onClick={handleMenuOpen}
                    />
                </div>

                <div className={"navigation-slider-background"} onClick={handleMenuOpen}></div>
                <div className={`${"navigation-slider"}`}>
                    <ol className={"navigation-slider-settings"}>
                        <li className={"navigation-slide-profile"}>
                            <Image
                                className={"navigation-slide-profile-avatar"}
                                src="/assets/nav/profile.png"
                                alt="menu"
                                width={32}
                                height={32}
                                quality={70}
                            />
                            <p className={"navigation-slide-profile-link"}>
                                <span className={"navigation-slide-profile-name"}>Juan</span>
                                <span className={"navigation-slide-profile-change"}>
                                    Cambiar perfiles
                                </span>
                            </p>
                        </li>
                        {["Cuenta", "Centro de ayuda", "Cerrar sesión en Netflix"].map((el) => {
                            return (
                              <li key={el} className={"navigation-slide-setting"}>
                                    {el}
                                </li>
                            );
                        })}
                    </ol>
                    <ol className="navigation-slide-sections">
                        <li className="navigation-slide-section navigation-slide-section-active">
                            Inicio
                        </li>
                        <li className="navigation-slide-section">Mi lista</li>
                    </ol>
                    <ol className="navigation-slide-genres">
                        {netflixData.navGenres.map((genre) => (
                            <li key={genre} className="navigation-slide-section">
                                <NextLink href={`/`}>
                                    <a>{genre}</a>
                                </NextLink>
                            </li>
                        ))}
                    </ol>
                </div>
                <NextLink href="/">
                    <a>
                        <Image src="/assets/logo-shadow2x.png" alt="logo" width={84} height={24} />
                    </a>
                </NextLink>
            </div>
            <form>
                <input type="text" placeholder="Buscar" className={"navigation-search-input"} />
            </form>
        </StyledMobileNav>
    );
};
