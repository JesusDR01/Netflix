import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Lazy, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { StyledCarousel } from "./Carousel.styled";
import { useInView } from "react-intersection-observer";
import { BREAKPOINTS_CONFIG } from "src/constants/carousel";
import { useMediaQuery } from "react-responsive";
import SwiperSlideContent from "../SwiperSlideContent";
SwiperCore.use([Autoplay, Navigation, Lazy, Keyboard, Pagination]);

export const Carousel = ({
    slideData,
}: {
    slideData: {
        title: string;
        media: {
            tags: string[];
            img: string;
        }[];
        exploreAll: boolean;
        isTop: boolean;
    };
}) => {
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: "200px",
        triggerOnce: true,
    });
    const isTop = slideData?.isTop;
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });
    return (
        <StyledCarousel ref={ref} isTop={isTop}>
            {inView && (
                <Swiper
                    parallax
                    key={slideData.media.length}
                    className="mySwiper"
                    grabCursor={true}
                    navigation={true}
                    slidesPerView={2}
                    pagination={true}
                    speed={1800}
                    lazy={!isMobile}
                    breakpoints={BREAKPOINTS_CONFIG}
                    loop={!isMobile}
                    simulateTouch={isMobile}
                    freeMode={isMobile}
                    touchRatio={isMobile ? 1.5 : 1}
                >
                    {slideData.media.map((media, idx) => {
                        return (
                            <SwiperSlide tabIndex={0} key={idx}>
                                <SwiperSlideContent media={media} idx={idx} isTop={isTop} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            )}
        </StyledCarousel>
    );
};
