import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useScrolledNav } from "src/hooks/useScrolledNav";
import { StyledDesktopNav } from "./DesktopNav.styled";
import netflixData from "src/models/netflixData.json";

export const DesktopNav = () => {
    const { scrolledNav } = useScrolledNav();
    const [menuOpen, setMenuOpen] = useState(false);
    const [mouseOverMenu, setMouseOverMenu] = useState(false);
    const [mouseOverProfile, setMouseOverProfile] = useState(false);
    const handleMouseOverMenu = () => {
        setMouseOverMenu(true);
    };
    const handleMouseLeaveMenu = () => {
        setMouseOverMenu(false);
    };
    const handleMouseOverProfile = () => {
        setMouseOverProfile(true);
    };
    const handleMouseLeaveProfile = () => {
        setMouseOverProfile(false);
    };

    useEffect(() => {
        if (mouseOverMenu || mouseOverProfile) {
            setMenuOpen(true);
        }

        const timer = setTimeout(() => {
            if (!mouseOverMenu && !mouseOverProfile) {
                setMenuOpen(false);
            }
        }, 200);
        return () => clearTimeout(timer);
    }, [mouseOverMenu, mouseOverProfile]);

    return (
        <StyledDesktopNav scrolledNav={scrolledNav} menuOpen={menuOpen}>
            <div className="main-header">
                <a className="logo icon-logoUpdate active"></a>
                <ul className="tabbed-primary-navigation">
                    {["Inicio", "Series", "Películas", "Novedades", "Mi lista"].map((el) => (
                        <li key={el}>{el}</li>
                    ))}
                </ul>
                <div className="secondary-navigation">
                    <button className="search" />
                    <button className="notification" />
                    <div
                        className="account-menu-item"
                        onMouseEnter={() => handleMouseOverMenu()}
                        onMouseLeave={() => handleMouseLeaveMenu()}
                    >
                        <Image
                            className="navigation-slide-profile-avatar"
                            src="/assets/nav/profile.png"
                            alt="menu"
                            width={32}
                            height={32}
                            quality={70}
                        />
                        <span className="caret"></span>
                        <div className="callout-arrow"></div>
                    </div>
                    <div
                        className="menu"
                        onMouseEnter={() => handleMouseOverProfile()}
                        onMouseLeave={() => handleMouseLeaveProfile()}
                    >
                        <ul>
                            {netflixData.profiles.map(
                                (el: { img: string; profileName: string }) => {
                                    return (
                                        <li key={el.profileName}>
                                            <div className="profile-icon">
                                                <Image
                                                    src={`/api/imageProxy?imageUrl=${el.img}`}
                                                    width="32px"
                                                    height="32px"
                                                    alt={el.profileName}
                                                />
                                            </div>
                                            <a>{el.profileName}</a>
                                        </li>
                                    );
                                }
                            )}
                            <li>
                                <div className="profile-modify-icon">
                                    <Image
                                        src={`/assets/nav/edit.svg`}
                                        width="24px"
                                        height="24px"
                                    />
                                </div>
                                <span>Administrar perfiles</span>
                            </li>
                        </ul>
                        <ul>
                            {[
                                { name: "Cuenta", img: "user" },
                                { name: "Centro de ayuda", img: "help" },
                            ].map((el) => (
                                <li key={el.name} className="sub-menu-link">
                                    <div className="settings-icon">
                                        <Image
                                            src={`/assets/nav/${el.img}.svg`}
                                            width="24px"
                                            height="24px"
                                        />
                                    </div>
                                    <span>{el.name}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="sign-out-links">
                            <li>
                                <span>Cerrar sesión en Netflix</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledDesktopNav>
    );
};
