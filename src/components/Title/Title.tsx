import React from "react";
import { StyledTitle } from "./Title.styled";
import NextLink from "next/link";

import dynamic from "next/dynamic";

export const Title = ({ title, exploreAll }: { title: string; exploreAll: boolean }) => {
    const TitleArrowDynamic = dynamic(() => import("../TitleArrow"), {
        ssr: false,
    });
    return (
        <StyledTitle>
            <NextLink href={`/`}>
                <a className="title-wrapper">
                    <span>{title}</span>
                    {exploreAll && (
                        <div className="explore-all-wrapper">
                            <div className="explore-all">Explorar todos</div>
                            <TitleArrowDynamic />
                        </div>
                    )}
                </a>
            </NextLink>
        </StyledTitle>
    );
};
