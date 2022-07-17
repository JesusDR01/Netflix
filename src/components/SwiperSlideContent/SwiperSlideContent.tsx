import React from "react";
import SlidePreview from "../SlidePreview";
import TopSvg from "../TopSvg";
import { StyledSwiperSlideContent } from "./SwiperSlideContent.styled";

export const SwiperSlideContent = ({
    isTop,
    media,
    idx,
}: {
    isTop: boolean;
    media: {
        tags: string[];
        img: string;
    };
    idx: number;
}) => {
    return (
        <StyledSwiperSlideContent mainImage={media.img} isTop={isTop}>
            <>
                {isTop && <TopSvg rank={idx} />}
                <img src={media.img} width="237px" height="133px" />
                {!isTop && <div className="fallback-text-container"></div>}
                <SlidePreview media={media} isTop={isTop} />
            </>
        </StyledSwiperSlideContent>
    );
};
