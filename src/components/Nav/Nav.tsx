import React, { useState } from "react";
import styles from "./Nav.module.scss";
import Image from "next/image";
import NextLink from "next/link";

export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className={styles.nav}>
            <div className={styles["logo-menu-wrapper"]}>
                <div className={styles["image-wrapper"]}>
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
                    className={styles["navigation-slider-background"]}
                    style={{ display: menuOpen ? "none" : "block" }}
                    onClick={handleMenuOpen}
                ></div>
                <div
                    className={`${styles["navigation-slider"]} ${menuOpen || styles["slide-open"]}`}
                >
                    <ol className={styles["navigation-slider-settings"]}>
                        <li className={styles["navigation-slide-profile"]}>
                                <Image
                                    className={styles["navigation-slide-profile-avatar"]}
                                    src="/assets/nav/profile.png"
                                    alt="menu"
                                    width={32}
                                    height={32}
                                    quality={70}
                                />
                            <p className={styles["navigation-slide-profile-link"]}>
                                <span className={styles["navigation-slide-profile-name"]}>
                                    Juan
                                </span>
                                <span className={styles["navigation-slide-profile-change"]}>
                                    Cambiar perfiles
                                </span>
                            </p>
                        </li>
                        <li>
                            Cuenta
                        </li>
                        <li>
                            Centro de ayuda
                        </li>
                        <li>
                            Cerrar sesión en Netflix
                        </li>
                    </ol>
                </div>

                <NextLink href="/">
                    <a className={styles.logo} />
                </NextLink>
            </div>
            <form>
                <input
                    type="text"
                    placeholder="Buscar"
                    className={styles["navigation-search-input"]}
                />
            </form>
        </nav>
    );
};
