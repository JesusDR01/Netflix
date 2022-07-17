import styled from "styled-components";

type StyledCarouselProps = {
    isTop: boolean;
};
export const StyledCarousel = styled.div<StyledCarouselProps>`
    overflow: hidden;
    .mySwiper {
        overflow: visible;
        z-index: 0;
        &:hover {
            z-index: 1;
            .swiper-pagination {
                position: absolute;
                top: -29px;
                z-index: 0;
                right: 50px;
                .swiper-pagination-bullet {
                    display: inline-block;
                    width: 12px;
                    height: 2px;
                    background-color: #4d4d4d;
                    margin-left: 1px;
                }
                .swiper-pagination-bullet-active {
                    background-color: #aaa;
                }
            }
        }

        .swiper-slide {
            display: flex;
            width: 99%;
            margin-right: 3px;
            cursor: pointer;
            background-size: cover;
            overflow: hidden;
            box-sizing: border-box;

            &:hover,
            &:active {
                box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
                img {
                    transform: scale(1.1);
                    z-index: 0;
                }
            }
        }

        .swiper-button-next,
        .swiper-button-prev {
            font-weight: 700;
            width: 45px;
            top: ${({ isTop }) => (isTop ? "84px" : "57px")};
            height: 45px;
            color: #fff;
            border-radius: 64px;
            &::before {
                height: 100%;
                content: "";
                overflow: hidden;
                right: 3px;
                position: absolute;
                display: block;
                background: rgba(20, 20, 20, 0.5);
                width: 100%;
                border-radius: 53px;
            }
            &::after {
                transition: all 0.1s ease-in-out;
                position: absolute;
                top: 0px;
                transform: scale(0.5);
                right: 12px;
                content: "next";
            }
            &:hover {
                &::after {
                    transform: scale(0.7);
                }
                &::before {
                    background: rgba(20, 20, 20, 0.7);
                }
            }
        }
        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }
    }

    @media screen and (min-width: 768px) {
        overflow: visible;
        .mySwiper {
            .swiper-slide {
                overflow: visible;

                &:hover,
                &:active {
                    box-shadow: initial;
                    img {
                        transform: inherit;
                        z-index: 0;
                    }
                }
            }

            .swiper-button-next,
            .swiper-button-prev {
                display: block;
            }
            .swiper-button-prev {
                transform: translate(-55px, 0);
                &:hover {
                    &::after {
                        transform: rotate(180deg) translateX(15px) scale(0.7);
                    }
                }
                &::after {
                    right: 0;
                    transform: rotate(180deg) translateX(15px) scale(0.6);
                }
            }
        }
    }
`;
