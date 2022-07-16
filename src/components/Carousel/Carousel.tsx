import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Lazy, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { StyledCarousel, StyledSwiperSlideContent } from "./Carousel.styled";
import SlidePreview from "../SlidePreview";
import { useInView } from "react-intersection-observer";
import TopSvg from "../TopSvg";
import {BREAKPOINTS_CONFIG} from 'src/constants/carousel';

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
    return (
        <StyledCarousel ref={ref} isTop={isTop}>
            {inView && (
                <Swiper
                    parallax
                    key={slideData.media.length}
                    className="mySwiper"
                    grabCursor={true}
                    slidesPerView={2}
                    speed={1800}
                    navigation={true}
                    loop={true}
                    lazy={true}
                    breakpoints={BREAKPOINTS_CONFIG}
                    pagination={true}
                >
                    {slideData.media.map((media, idx) => {
                        return (
                            <SwiperSlide tabIndex={0} key={idx}>
                                <StyledSwiperSlideContent
                                    mainImage={media.img}
                                    isTop={isTop}
                                >
                                    <>
                                        {isTop && <TopSvg rank={idx} />}
                                        <Image
                                            src={`/api/imageProxy?imageUrl=${media.img}`}
                                            width="237px"
                                            height="133px"
                                        />
                                        {!isTop && (
                                            <div className="fallback-text-container"></div>
                                        )}
                                        <SlidePreview media={media} isTop={isTop}/>
                                    </>
                                </StyledSwiperSlideContent>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            )}
        </StyledCarousel>
    );
};
