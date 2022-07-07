import Image from "next/image";
import NextLink from "next/link";
import React, { useState } from "react";
import { StyledNav } from "./Nav.styled";

export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <StyledNav>
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

                <div
                    className={"navigation-slider-background"}
                    style={{ display: menuOpen ? "none" : "block" }}
                    onClick={handleMenuOpen}
                ></div>
                <div
                    className={`${"navigation-slider"} ${menuOpen || "slide-open"}`}
                >
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
                                <span className={"navigation-slide-profile-name"}>
                                    Juan
                                </span>
                                <span className={"navigation-slide-profile-change"}>
                                    Cambiar perfiles
                                </span>
                            </p>
                        </li>
                        <li>Cuenta</li>
                        <li>Centro de ayuda</li>
                        <li>Cerrar sesión en Netflix</li>
                    </ol>
                </div>

                <NextLink href="/">
                    <a className={"logo"} />
                </NextLink>
            </div>
            <form>
                <input
                    type="text"
                    placeholder="Buscar"
                    className={"navigation-search-input"}
                />
            </form>
        </StyledNav>
    );
};
