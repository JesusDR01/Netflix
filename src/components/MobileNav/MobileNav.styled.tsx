import styled from "styled-components";

type StyledMobileNavProps = {
    menuOpen: Boolean;
    scrolledNav: Boolean;
};

export const StyledMobileNav = styled.nav<StyledMobileNavProps>`
    @media screen and (min-width: 768px) {
        display: none;
    }
    width: 100%;
    background: ${({ menuOpen, scrolledNav }) => {
        if (menuOpen) {
            return "#000";
        } else if (scrolledNav) {
            return "rgba(0, 0, 0, 0.5)";
        }
        return 'url("/assets/nav/header_gradient.png") repeat-x';
    }};
    position: fixed;
    z-index: 4;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 20px;

    ol {
        list-style: none;
        li {
            display: block !important;
        }
    }

    .logo-menu-wrapper {
        display: flex;
    }
    .image-wrapper {
        min-width: 24px;
        margin-right: 20px !important;
    }
    .logo {
        width: 84px;
        height: 24px;
        text-decoration: none;
        font-size: 1.43em;
        color: #e50914;
        &::before {
            font-family: "nf-icon";
            line-height: 1;
            content: "\e5d0";
        }
    }
    .navigation-slider {
        &::-webkit-scrollbar {
            display: none;
        }
        top: 50px;
        position: fixed;
        left: -250px;
        bottom: 0;
        width: 250px;
        transform: ${({ menuOpen }) => (menuOpen ? "translateX(250px)" : "translateX(-250px)")};
        transition: transform 150ms cubic-bezier(0.5, 0, 0.1, 1);
        background: #000;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .navigation-slider-background {
        display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
        position: fixed;
        left: 0;
        top: 50px;
        bottom: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        overflow: hidden;
    }

    .navigation-slider-settings {
        border-bottom: 1px solid #333;
        .navigation-slide-setting {
            margin-bottom: 10px;
        }
        li {
            padding-left: 20px !important;
        }
        .navigation-slide-profile {
            display: flex;
            align-items: center;
            height: 52px;
            margin-bottom: 0;

            .navigation-slide-profile-avatar {
                display: inline-block;
                vertical-align: middle;
                height: 32px;
                width: 32px;
            }
            .navigation-slide-profile-link {
                display: inline-block;
                margin-left: 8px;
                span {
                    display: block;
                }
            }
            .navigation-slide-profile-change {
                font-size: 0.7em;
                font-weight: 400;
            }
        }
    }
    .navigation-slide-sections,
    .navigation-slider-settings,
    .navigation-slide-genres {
        color: grey;
        font-weight: 700;
        padding: 10px 0;
        margin-bottom: 5px;
        margin-top: 0;
        padding-top: 0;
        li {
            padding-left: 17px;
        }
    }
    .navigation-slide-sections {
        margin-bottom: 0;
        padding-bottom: 0;
        .navigation-slide-section-active {
            color: #fff;
            border-left: 3px solid #b9090b;
            box-sizing: border-box;
        }
    }
    .navigation-slide-section {
        padding-left: 17px;
        border-left: 3px solid #000;
        line-height: 2;
    }
    .navigation-search-input {
        font-size: 12px;
        padding: 8px 0.5em;
        margin-right: 2px;
        width: 114px;
        height: 28.67px;
        font-size: 1rem;
        background: transparent
            url(https://assets.nflxext.com/ffe/siteui/akira/fallback/secondary_button_hover_background.png)
            repeat;
        border: 1px solid #ccc;
        color: #ccc;
    }
`;
