import styled from "styled-components";

type StyledDesktopNavProps = {
    scrolledNav: Boolean;
    menuOpen: Boolean;
};

export const StyledDesktopNav = styled.nav<StyledDesktopNavProps>`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
    }
    background: ${({ scrolledNav }) => (scrolledNav ? "rgb(20, 20, 20)" : "transparent")};
    position: ${({ scrolledNav }) => (scrolledNav ? "fixed" : "relative")};
    top: 0px;
    width: 100%;
    height: ${({ scrolledNav }) => (scrolledNav ? "60px" : "0px")};
    z-index: 2;
    transition: background 0.3s ease-in-out;

    .main-header {
        width: 100%;
        height: 60px;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
        align-items: center;
        display: flex;
        font-size: 0.85vw;
        padding: 0 4%;
        position: relative;
        transition: background-color 0.4s;
        z-index: 2;
        .logo {
            color: #e50914;
            cursor: pointer;
            display: inline-block;
            font-size: 1.8em;
            margin-right: 5px;
            text-decoration: none;
            vertical-align: middle;
            background-color: transparent;
            font-size: 25px;
        }
        .icon-logoUpdate {
            font-family: nf-icon;
            font-style: normal;
            font-variant: normal;
            font-weight: 400;
            line-height: 1;
            text-transform: none;
            transform: translateZ(0);
            &::before {
                content: "\\e5d0";
            }
        }

        .tabbed-primary-navigation {
            color: #fff;
            align-items: center;
            display: flex;
            margin: 0;
            padding: 0;
            li {
                font-size: 0.7rem;
                display: block;
                margin-left: 18px;
                cursor: pointer;
                &:hover {
                    color: #b3b3b3;
                }
            }
        }
        .secondary-navigation {
            align-items: center;
            display: flex;
            flex-grow: 1;
            height: 100%;
            justify-content: flex-end;
            position: absolute;
            right: 4%;
            top: 0;
            .search {
                cursor: pointer;
                width: 24px;
                height: 24px;
                border: none;
                background: url(/assets/nav/search.svg) no-repeat center;
                filter: invert(1);
                margin: 0;
            }
            .notification {
                cursor: pointer;
                width: 24px;
                height: 24px;
                border: none;
                background: url(/assets/nav/notifications.svg) no-repeat center;
                filter: invert(1);
            }

            .notification {
                margin: 1px 16px;
            }
            .account-menu-item {
                display: flex;
                align-items: center;
                img {
                    border-radius: 4px;
                    height: 32px;
                    vertical-align: middle;
                    width: 32px;
                }
                .caret {
                    display: inline-block;
                    border-color: #fff transparent transparent;
                    border-style: solid;
                    border-width: 5px 5px 0;
                    height: 0;
                    margin-left: 10px;
                    transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
                    width: 0;
                    vertical-align: middle;
                    transform: ${({ menuOpen }) => (menuOpen ? "rotate(180deg)" : "rotate(0deg)")};
                }
                .callout-arrow {
                    border: 7px solid transparent;
                    border-bottom-color: #e5e5e5;
                    bottom: -3px;
                    height: 0;
                    left: 78%;
                    margin-left: -7px;
                    position: absolute;
                    width: 0;
                    transition: opacity 0.1s;
                    opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
                }
            }
            .menu {
                background-color: rgba(0, 0, 0, 0.9);
                border: 1px solid hsla(0, 0%, 100%, 0.15);
                box-sizing: border-box;
                color: #fff;
                cursor: default;
                font-size: 13px;
                line-height: 21px;
                opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
                position: absolute;
                top: 71px;
                z-index: 0;
                visibility: ${({ menuOpen }) => (menuOpen ? "visible" : "hidden")};
                transition: opacity 0.5s;
                width: 195px;
                font-family: Netflix Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                ul {
                    padding: 0;
                    img {
                        margin-right: 10px;
                    }
                    li {
                        padding: 10px;
                        display: flex;
                        align-items: center;
                        .profiles-img {
                            width: 24px;
                            height: 24px;
                            background: url(/assets/nav/edit.svg) no-repeat center;
                            filter: invert(74%) sepia(0%) saturate(671%) hue-rotate(190deg)
                                brightness(94%) contrast(106%);
                        }
                        span{
                            align-self: flex-start;
                        }
                        &:hover {
                            a {
                                text-decoration: underline;
                            }
                            a,span{
                                cursor: pointer;
                            }
                        }
                    }

                    .profile-icon {
                        height: 32px;
                        margin-right: 10px;
                        width: 32px;
                        img {
                            border-radius: 4px;
                        }
                    }
                }
                .sign-out-links {
                    border-top: 1px solid hsla(0, 0%, 100%, 0.25);
                    display: flex;
                    justify-content: center;
                }
                .profile-modify-icon,
                .settings-icon {
                    height: 32px;
                    margin-right: 5px;
                    margin-left: 5px;
                    width: 32px;
                    img {
                        border-radius: 4px;
                    }
                    filter: invert(74%) sepia(0%) saturate(671%) hue-rotate(190deg) brightness(94%)
                        contrast(106%);
                }
            }

            .callout-arrow {
                opacity: 1;
            }
        }
    }
`;
