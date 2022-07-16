import React from "react";
import { StyledMain, StyledSlide } from "./Main.styled";
import netflixData from "src/models/netflixData.json";
import Title from "../Title";
import  Carousel  from "../Carousel";

export const Main = () => {
    return (
        <StyledMain>
            {netflixData.slides.map((slide) => {
                return (
                    <StyledSlide isTop={slide.isTop} key={slide.title}>
                        <Title title={slide.title} exploreAll={slide.exploreAll} />
                        <Carousel slideData={slide} />
                    </StyledSlide>
                );
            })}
        </StyledMain>
    );
};
