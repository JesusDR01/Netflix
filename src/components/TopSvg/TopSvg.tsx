import React from "react";
import { StyledTopSvg } from "./TopSvg.styled";
import {TOPS_SVGS_PATH} from 'src/constants/tops';
export const TopSvg = ({ rank }: { rank: number }) => {
    
    return (
        <StyledTopSvg
            width="100%"
            height="199"
            viewBox="0 0 140 154"
            className="svg-icon svg-icon-rank-1 top-10-rank"
        >
            <path stroke="#595959" strokeWidth={4} d={TOPS_SVGS_PATH[rank]} />
        </StyledTopSvg>
    );
};
