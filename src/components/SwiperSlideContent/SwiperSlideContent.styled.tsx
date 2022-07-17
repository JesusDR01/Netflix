import styled, { css } from "styled-components";

type StyledSwiperSlideContentProps = {
    mainImage: string;
    isTop: boolean;
    children?: JSX.Element;
};

const isTopStyles = `
    height: 0;
    overflow: visible;
    padding: 38.714285714% 0;
    position: relative;
    border-radius: 0.2vw;
    width: 100%;

    .slider-img {
        bottom: 0;
        height: 100%;
        left: auto;
        object-fit: cover;
        position: absolute;
        right: 0;
        top: 0;
        width: 50%;
    }
`;

export const StyledSwiperSlideContent = styled.div<StyledSwiperSlideContentProps>`
    .slider-img {
        box-sizing: border-box;
        display: inline-block;
        overflow: hidden;
        width: initial;
        height: initial;
        background: none;
        opacity: 1;
        border: 0px;
        margin: 0px;
        padding: 0px;
        position: relative;
        max-width: 100%;
        min-height: 135px;
    }
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
        ${({ isTop }) =>
            isTop &&
            css`
                ${isTopStyles}
            `}
        &:hover,
        .mini-modal:hover {
            .mini-modal {
                opacity: 1;
                width: 342px;
                left: -48px;
                top: -68px;
                transform: scale(1);
                pointer-events: all;
                visibility: visible;
            }
        }
    }
`;
