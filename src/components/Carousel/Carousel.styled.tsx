import styled from "styled-components";

type StyledCarouselProps = {
    isTop: boolean;
};
export const StyledCarousel = styled.div<StyledCarouselProps>`
    overflow: visible;
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
        .mySwiper {
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

export interface IInputWrapperProps {
    mainImage: string;
    isTop: boolean;
    children?: JSX.Element | JSX.Element[];
}

export const StyledSwiperSlideContent = styled.div<IInputWrapperProps>`
    .fallback-text-container {
        background-color: #222;
        background-image: linear-gradient(transparent, #000);
        bottom: 0;
        height: 96%;
        top: 0;
        left: 0;
        position: absolute;
        max-width: 237px;
        right: 0;
        z-index: -1;
    }
    @media screen and (min-width: 768px) {
        display: ${({ isTop }) => (isTop ? `flex` : "block")};
        .top-wrapper,
        .top-wrapper img {
            height: 26px;
            overflow: visible;
            padding: 37.714286% 0%;
            position: relative;
            width: 81%;
            top: -77px;
            left: 2vw;
        }
        &:hover, .mini-modal:hover {
            .mini-modal {
                opacity: 1;
                width: 352px;
                left: -67px;
                top: -68px;
                transform: scale(1);
                pointer-events: all;
                .previewModal-boxart {
                    background-image: ${({ mainImage }) => mainImage && `url(${mainImage})`};
                }
            }
        }
    }
`;
